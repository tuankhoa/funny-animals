const express = require('express');
const router = express.Router();

const AnimalController = require('../controllers/animal.controller');

router.get('/', AnimalController.GetAnimals);

router.get('/:id', AnimalController.GetAnimalById);

router.post('/', AnimalController.CreateAnimal);

module.exports = router;
