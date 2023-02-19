const { getDBByGender } = require("../controllers/genderController")

const getGenderHandler = async (req, res) => {
    try {
        const createGenders = await getDBByGender();
        res.status(200).json(createGenders)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
};

module.exports = {
    getGenderHandler,
};