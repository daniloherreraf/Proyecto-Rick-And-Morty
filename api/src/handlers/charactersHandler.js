const {
    createCharacter,
    getAllInfo,
    searchCharacterByName,
    getCharacterById,
    deleteCharacterById
} = require("../controllers/charactersController")

const getCharactersHandler = async (req, res) => {
    const { name } = req.query;
    try {
        
        const results = name ? await searchCharacterByName(name) : await getAllInfo();
        console.log(results)
        if(results.length === 0) {
            return res.status(404).send(`No existe personaje con ese nombre: ${name}`)
        } else {
           
            return res.status(200).json(results);
        }
    } catch (error) {
        res.status(404).json({error: error.message})   
    }
};

const getCharacterHandler = async (req, res) => {
    const { id } = req.params
    try {
        const characterId = await getCharacterById(id);
        res.status(200).json(characterId)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
};

const createCharacterHandler = async (req, res) => {
    const { name, status, species, genderId, location, image } = req.body
    
    try { 
        const newCharacter = await createCharacter(name, status, species, genderId, location, image)
        res.status(201).json(newCharacter)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
    
};

const deleteCharacterHandler = async (req, res) => {
    const { id } = req.params

    try {
        const deleteCharacter = await deleteCharacterById(id)
        res.status(200).json(deleteCharacter)
    } catch (error) {
        res.status(404).json({error:error.message}) 
    }  
};

module.exports = {
    getCharactersHandler,
    getCharacterHandler,
    createCharacterHandler,
    deleteCharacterHandler,
};