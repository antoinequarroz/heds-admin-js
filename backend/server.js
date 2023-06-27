require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Point d'entrée de l'API
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur notre API de la HEdS!' });
});

// D'autres routes ici...

// Lancement du serveur
const PORT = process.env.DB_PORT || 8000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}.`);
});

const mysql = require('mysql2');

// Création de la connexion à la base de données
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectTimeout: 10000 // Temps d'attente de la connexion en millisecondes
});


console.log({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT
});



// Test de la connexion
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

    const query = "INSERT INTO tblmateriel (matTitre, matDescription, matCategorie, matModeEmploi, matCaracteristique, matLien, matRemarque, matNombre) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const params = [newMaterial.titre, newMaterial.description, newMaterial.categorie, newMaterial.modeEmploi, newMaterial.caracteristique, newMaterial.lien, newMaterial.remarque, newMaterial.nombre];

    db.query(query, params, (err, result) => {
        if (err) {
            console.log("Erreur lors de l'insertion du matériel: ", err);
            res.status(500).send({ error: "Erreur lors de l'insertion du matériel", details: err.message });
        } else {
            res.send({ status: "Succès", id: result.insertId });
        }
    });
});



