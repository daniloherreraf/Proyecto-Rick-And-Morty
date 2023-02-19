require('dotenv').config(); // la utilizo para que mi proyecto pueda leer las variables de entorno y las coloque a disposicion donde las necesito estan en el archivo .env
const { Sequelize } = require('sequelize');
const CharacterModel = require("./models/Character");
const GenderModel = require("./models/Gender");
const {
    DB_USER, DB_PASSWORD, DB_HOST, 
  } = process.env; // variables de entorno disponibles

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/serie`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

CharacterModel(sequelize);
GenderModel(sequelize);



const { character, gender } = sequelize.models

gender.hasMany(character);
character.belongsTo(gender);

module.exports = { sequelize, ...sequelize.models };