const express = require('express');
const router = express.Router();
const {
    getDestinations,
    getDestinationById,
    createDestination,
    updateDestination,
    deleteDestination,
    upload
} = require('../controllers/destController');

router.get('/', getDestinations);
router.get('/:id', getDestinationById);
router.post('/', createDestination);
router.patch('/:id', updateDestination);
router.delete('/:id', deleteDestination);


module.exports = router;