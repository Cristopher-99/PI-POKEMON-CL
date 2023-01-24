const {Pokemon, Type} = require("../db");
const axios = require("axios");

const getApiPokemons = async ()=>{
    try {
        const apiUrl= await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=24`);
        let pokemonsApi = await axios.all(apiUrl.data.results.map( async poke =>{
            let pokeData= await axios(poke.url)
            return {
                id: pokeData.data.id,
                name: pokeData.data.name,
                img: pokeData.data.sprites.other.dream_world.front_default,
                types: pokeData.data.types.map(t => t.type.name),
                attack: pokeData.data.stats[1].base_stat,
            }
        }))

    return pokemonsApi;

    } catch (error){
        return(error)
    }
}
const getDbPokemons = async () =>{
    try {
        let pokeDB = await Pokemon.findAll({
            include:{
                model: Type,
                attributes:['name'],
                through: {
                    attributes: []
                }
            }
        })
        let pokemonsDB = pokeDB.map(e =>{
            return {
              id: e.id,
              img: e.img,
              name: e.name,
              types: e.types.map(t=>t.name),
              created: e.created,
              attack: e.attack,
              defense: e.defense
            }
        })
        return pokemonsDB;
    } catch (error) {
        return error;
    }
    
}

const getAllPokemons = async () =>{ // unifico los pokemons de mi DB y mi API

    const apiPoke = await getApiPokemons();
    const dbPoke = await getDbPokemons();
    const AllPokemons=  [...dbPoke, ...apiPoke]; 
        // return dbPoke.concat(apiPoke);
    return AllPokemons;


}

  

module.exports = {getAllPokemons};