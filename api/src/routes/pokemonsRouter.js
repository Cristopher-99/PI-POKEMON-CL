const { Router } = require("express");
const pokemonsRouter= Router();
const { getAllPokemonsHandler, getIdPokemonHandler, createPokemonHandler }= require("../Handlers/PokemonsHandler")

pokemonsRouter.get("/", getAllPokemonsHandler);
pokemonsRouter.get("/:id", getIdPokemonHandler);
pokemonsRouter.post("/", createPokemonHandler);


module.exports = pokemonsRouter ;