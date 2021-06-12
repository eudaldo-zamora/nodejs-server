const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

router.post('/', personController.createPerson);
router.get('/', personController.findPersons);
router.put('/:id', personController.updatePerson);
router.get('/:id', personController.findPerson);
router.delete('/:id', personController.removePerson);

module.exports = router;