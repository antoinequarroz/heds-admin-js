require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const slugify = require('slugify');

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