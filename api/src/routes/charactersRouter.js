const { Router } = require("express");
const {
    getCharacterHandler,
    getCharactersHandler,
    createCharacterHandler,
    deleteCharacterHandler,
} = require("../handlers/charactersHandler");

const charactersRouter = Router();



charactersRouter.get("/", getCharactersHandler);

charactersRouter.get("/:id", getCharacterHandler);

charactersRouter.post("/", createCharacterHandler);

charactersRouter.delete("/:id", deleteCharacterHandler);

module.exports = charactersRouter;