const db = require('../config/connection');
const { User, Animal } = require('../models');
const catsSeeds = require('./catsSeeds.json');
const dogsSeeds = require('./dogsSeeds.json');


db.once('open', async () => {
  await User.deleteMany({});
  await Animal.deleteMany({});

  const technologies = await Tech.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});
