require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const slugify = require('slugify'); // Ajout du module slugify

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

app.post('/materiel', (req, res) => {
    const newMaterial = req.body;


    console.log("Corps de la requête reçue : ", newMaterial)

    let matImage = req.body.matImage;
    let matModeEmploi = req.body.matModeEmploi;
    let slug = slugify(req.body.matTitre, { lower: true, strict: true });
    console.log('Generated slug: ', slug);

    let buffImage = Buffer.from(matImage.split(';base64,').pop(), 'base64');
    let buffPdf = Buffer.from(matModeEmploi.split(';base64,').pop(), 'base64');

    let filename = req.body.matTitre.replace(/\s/g, "_"); // remplace les espaces par des tirets bas
    let imageFilePath = path.join(__dirname, 'src/assets/images/', `${filename}.png`);
    let pdfFilePath = path.join(__dirname, 'src/assets/documents/', `${filename}.pdf`);

    try {
        fs.writeFileSync(imageFilePath, buffImage);
        fs.writeFileSync(pdfFilePath, buffPdf);
    } catch (err) {
        console.error('Erreur lors de l\'écriture des fichiers: ', err);
        return res.status(500).json({ error: err.message });
    }

    console.log('Fichiers écrits avec succès!');
    const sql = `INSERT INTO tblmateriel (
        matTitre, matSlug, matNombre, matDescription, matCategorie, matModeEmploi, matCaracteristique,
        matLien, matImage, salId)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const params = [req.body.matTitre, slug, req.body.matNombre, req.body.matDescription, req.body.matCategorie, req.body.matModeEmploi, req.body.matCaracteristique, req.body.matLien, req.body.matImage, req.body.salId];

    db.query(sql, params, (error, result) => {
        if (error) {
            console.error('Erreur lors de l\'exécution de la requête SQL: ', sql);
            console.error('Avec les paramètres: ', params);
            console.error('Erreur détaillée: ', error);
            res.status(500).json({ error });
        } else {
            res.json(result);
        }
    });
});
