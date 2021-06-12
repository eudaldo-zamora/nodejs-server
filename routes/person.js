const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

router.post('/', personController.createPerson);
router.get('/', personController.findPersons);

module.exports = router;