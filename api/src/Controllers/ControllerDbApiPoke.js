const {Pokemon, Type} = require("../db");
const axios = require("axios");

const getApiPokemons = async ()=>{
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=60")
        const pokemon = response.data?.results.map(el=> axios.get(el.url))
        const prueba= await Promise.allSettled(pokemon).then(res=> res.filter(el=> el.status === "fulfilled"))
        // const filter= prueba.filter(el=> el.value.data);
        // console.log(prueba[0].value?.data);
        const data = prueba.map(el => {
            const {data} = el.value
                const obj = {
                    id: data.id,
                    name: data.name,
                    img: data.sprites.other?.dream_world.front_default,
                    types: data.types.map(t => t.type.name),
                    attack: data.stats[1].base_stat,
                }
                // console.log(obj)
                return obj;
            })
            // console.log(data.length);
            return data;

    } catch (error){
        console.log(error.message);
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
        
        const dbPoke = await getDbPokemons();
        const apiPoke = await getApiPokemons();
        const AllPokemons=  [...dbPoke, ...apiPoke]; 
            // return dbPoke.concat(apiPoke);
        // console.log(AllPokemons);
        return AllPokemons;
        
}



module.exports = {getAllPokemons};