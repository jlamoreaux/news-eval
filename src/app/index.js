const express = require('express');
const mainController = require('./controllers/mainController');

const router = express.Router();

router.get('/', mainController.getHomepage);

router.post('/evaluate', mainController.getAylien);

module.exports = router;