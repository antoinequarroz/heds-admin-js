require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur notre API de la HEdS!' });
});

const PORT = 8000; // par exemple
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}.`);
});

const mysql = require('mysql2');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT, // par exemple 3306
});

console.log({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT, // par exemple 3306
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

    const sql = "INSERT INTO tblmateriel (matTitre, matNombre, matDescription) VALUES (?, ?, ?)";
    const params = [req.body.matTitre, req.body.matNombre, req.body.matDescription];


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

