// routes liés aux adresses

const express = require('express');
const router = express.Router();

// Importer contrôleur d'adresses
const addressController = require('../controllers/addressController');

// Route avec POST pour ajouter une adresse
router.post('/add-adress', addressController.addAdress);

// exporter le routeur pour l'utiliser dans l'application principale
module.exports = router;

