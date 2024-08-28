const fs = require('fs');

const GetAnimals = async (req) => {
  const animals = JSON.parse(fs.readFileSync('data/animals.json'));
  return animals;
};

const GetAnimalById = async (id) => {
  const animals = JSON.parse(fs.readFileSync('data/animals.json'));
  return animals.find((animal) => animal.id == id) || null;
};

const CreateAnimal = async (animal) => {
  const animals = JSON.parse(fs.readFileSync('data/animals.json'));
  animals.push(animal);
  fs.writeFileSync('data/animals.json', JSON.stringify(animals));
  return animal;
}

module.exports = {
  GetAnimals,
  GetAnimalById,
  CreateAnimal
};
