const { Router } = require("express");
const typesRouter = Router();

const {getTypesHandler} = require("../Handlers/TypesHandler");

typesRouter.get("/", getTypesHandler);

module.exports = typesRouter ;