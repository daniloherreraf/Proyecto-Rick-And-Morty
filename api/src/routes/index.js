const { Router } = require("express");
const character = require("./charactersRouter");
const gender = require("./genderRouter");

const router = Router();

router.use("/character", character);
router.use("/gender", gender);



module.exports = router;

// https://rickandmortyapi.com/api/character


