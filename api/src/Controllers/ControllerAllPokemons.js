const {Pokemon, Type} = require("../db");
const axios = require("axios");

const getApiPokemons = async ()=>{
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50")
        const pokemon = response.data?.results.map(el=> axios.get(el.url))
        const prueba= await Promise.allSettled(pokemon)
            .then((res) => res.filter((el)=> el.status === "fulfilled"))
        // const filter= prueba.filter(el=> el.value.data);
        // console.log(prueba[0].value?.data);
        const pokemonsApi = prueba.map(el => {
            // const {data} = el.value 
                return {
                    id: el.value.data.id,
                    name: el.value.data.name,
                    img: el.value.data.sprites.other?.dream_world.front_default,
                    types: el.value.data.types.map(t => t.type.name),
                    attack: el.value.data.stats[1].base_stat,
                    defense: el.value.data.stats[2].base_stat,
                }
                // return obj;
            })
            // console.log(data);
            return pokemonsApi;

    } catch (error){
        console.log(error.message);
    }
}


const getAllPokemons = async () =>{ // unifico los pokemons de mi DB y mi API
        
    const dbPoke = await Pokemon.findAll();
    const apiPoke = await getApiPokemons();
    const AllPokemons=  [...dbPoke, ...apiPoke]; 
       // return dbPoke.concat(apiPoke);
        // console.log(AllPokemons);
    return AllPokemons;
        
}



module.exports = {getAllPokemons};