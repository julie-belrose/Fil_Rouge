const express = require('express');
const router = express.Router();

const {
    getAllTreatmentCenters,
    getTreatmentCenter,
    createTreatmentCenter,
    updateTreatmentCenter,
    deleteTreatmentCenter
} = require('./treatmentCenter.controller');

// Test agents route
router.get('/', (req, res) => {
    res.json({ message: 'Treatment centers route is working' });
}); 

router.get('/:id', getTreatmentCenter);
router.get('/', getAllTreatmentCenters);
router.post('/', createTreatmentCenter);
router.put('/:id', updateTreatmentCenter);
router.delete('/:id', deleteTreatmentCenter);

module.exports = router;
