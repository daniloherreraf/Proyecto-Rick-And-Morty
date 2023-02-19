const { character, gender } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");

const getApiInfo = async() => {
    const resUrl = await axios.get(" https://rickandmortyapi.com/api/character");
    let response = resUrl.data.results.map((result) => {
        return {
            id: result.id,
            name: result.name,
            status: result.status,
            species: result.species,
            gender: result.gender,
            location: result.location.name,
            image: result.image,
            created: false
        }
    });
    return response;
};

const getDBInfo = async () => {
    const charactersDB = await character.findAll({
        include: {
            model: gender,
            attributes: ['name'],
        }
    });
    let response = await charactersDB.map((element) => {
        return {
            id: element.id,
            name: element.name,
            status: element.status,
            species: element.species,
            gender: element.gender.name,
            location: element.location,
            image: element.image,
            createdInDb: element.createdInDb
        };
    });
   return response
};

const getAllInfo = async () => {
    const dbCharacter = await getDBInfo();
    const apiCharacter = await getApiInfo();
    console.log(getApiInfo)

    return [...apiCharacter, ...dbCharacter];
};

const searchCharacterByName = async(name) => {
    const characters = await getAllInfo();
    const filtered = characters.filter((element)=>element.name.toLowerCase().includes(name.toLowerCase()))
    return filtered
};

const getCharacterById = async (id) => {
    const characters = await getAllInfo();
    let characterById = await characters.filter((element) => element.id == id)
    return characterById
};

const createCharacter = async (name, status, species, genderId, location, image) => {
    const newCharacter = await character.create({name, status, species, location, image})
    await newCharacter.setGender(genderId);
    return newCharacter;
};

const deleteCharacterById = async (id) => {
    const deleteId =  await character.findByPk(id)
    if(!deleteId) {
        return "Error: id not found"
    } else {
        await deleteId.destroy()
    }
    return "Character delete"
};

module.exports = { 
    createCharacter, 
    getAllInfo,
    searchCharacterByName,
    getCharacterById,
    deleteCharacterById,
    
 };