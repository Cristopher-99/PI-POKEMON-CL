const { Router } = require("express");
const pokemonsRouter= Router();
const { getAllPokemonsHandler, getIdPokemonHandler, createPokemonHandler }= require("../Handlers/PokemonsHandler")
const {validate} = require("./validate");

pokemonsRouter.get("/", getAllPokemonsHandler);
pokemonsRouter.get("/:id", getIdPokemonHandler);
pokemonsRouter.post("/",validate, createPokemonHandler);


module.exports = pokemonsRouter ;