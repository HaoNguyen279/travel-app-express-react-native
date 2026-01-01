const express = require('express');

const router = express.Router();
const PlaceController = require('../controllers/PlaceController')

router.get('/getAllPlaces', PlaceController.getAllPlaces);

module.exports = router;