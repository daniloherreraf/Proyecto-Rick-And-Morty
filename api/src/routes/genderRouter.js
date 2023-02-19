const { Router } = require("express");
const { getGenderHandler } = require("../handlers/genderHandler");

const genderRouter = Router();



genderRouter.get("/", getGenderHandler);



module.exports = genderRouter;