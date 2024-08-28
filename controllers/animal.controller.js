const AnimalService = require('../services/animal.service');

const formatDataResponse = (data, isArray) => {
  if (!isArray) {
    return {
      data: data
    }
  } else {
    return {
      data: data,
      meta: {
        totalRecord: data.length
      }
    }
  }
}

const GetAnimals = async (req, res) => {

  const animals = await AnimalService.GetAnimals();

  res.status(200).send(formatDataResponse(animals, true));
};

const GetAnimalById = async (req, res) => {
  const { id } = req.params;
  const animal = await AnimalService.GetAnimalById(id);
  console.log(animal)
  if (animal) {
    res.status(200).send(animal);
  } else {
    res.status(404).send('Animal not found');
  }
};

const CreateAnimal = async (req, res) => {
  const animal = {
    id: req.body.id,
    name: req.body.name
  };

  const createdAnimal = await AnimalService.CreateAnimal(animal);

  res.status(201).send(createdAnimal);
};

module.exports = {
  GetAnimals,
  GetAnimalById,
  CreateAnimal
};
