const express = require("express");
const morgan = require("morgan");
const router = require("./routes")

const server = express();

server.use(morgan("dev")); // cuando recibas una request al usar el .use le estoy diciendo pasa po aca morgan 
server.use(express.json());
server.use(router);



module.exports = server;