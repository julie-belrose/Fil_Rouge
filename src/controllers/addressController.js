// Controller pour gérer l'entité adresses


// importer le modèle adresses
const adressList = require('../models/Adress');

// fonction ajouter une adresse 
exports.addAdress = (req, res) => {

    // Vérifier si champs requis -> présents
    const { street, city, postalCode } = req.body;

    if (!street || !city || !postalCode) {
        return res.status(400).send('Tous les champs sont requis : rue, ville et code postal.');
    }

    // Créer une nouvelle adresse
    const newAdress = {
        street,
        city,
        postalCode
    };
    
    // Ajouter à la liste (ici simule un enregistrement dans une BDD)
    adressList.push(newAdress);

    // rediriger vers la page d'accueil
    res.redirect('/');


}

