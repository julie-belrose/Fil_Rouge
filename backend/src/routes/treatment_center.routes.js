const express = require('express');
const router = express.Router();

const {
    getTreatmentCenters,
    getTreatmentCenter,
    createTreatmentCenter,
    updateTreatmentCenter,
    deleteTreatmentCenter
} = require('../domains/treatment_center/controller/treatment_center.controller');

// Test agents route
router.get('/', (req, res) => {
    res.json({ message: 'Treatment centers route is working' });
}); 

router.get('/:id', getTreatmentCenter);
router.get('/', getTreatmentCenters);
router.post('/', createTreatmentCenter);
router.put('/:id', updateTreatmentCenter);
router.delete('/:id', deleteTreatmentCenter);

module.exports = router;
