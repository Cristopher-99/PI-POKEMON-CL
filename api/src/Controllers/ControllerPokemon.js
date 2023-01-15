const {Pokemon, Type} = require("../db");
const axios = require("axios");

const getApiInfoPokemons = async ()=>{
    const apiUrl= await axios("https://pokeapi.co/api/v2/pokemon");
    const apiPoke = await axios.all(apiUrl.data.results.map(async poke =>{
        let pokeDetail= await axios(poke.url)
        return {
            id: pokeDetail.data.id,
            name: pokeDetail.data.name,
            img: pokeDetail.data.sprites.other.dream_world.front_default,
           //  background_image_2: pokeDetail.data.sprites.other['official-artwork'].front_default,
            types: pokeDetail.data.types.map(t => t.type.name),
            attack: pokeDetail.data.stats[1].base_stat,
            defense: pokeDetail.data.stats[2].base_stat,
        }
    }))
    return apiPoke;
}
const getDbInfoPokemons = async () =>{
    let pokeDB = await Pokemon.findAll({
        include:{
            model: Type,
            attributes:['name'],
            through: {
                attributes: []
            }
        }
    })
    let pokeDbFormat = pokeDB.map(e =>{
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
    return pokeDbFormat;
}
const getAllPokemons = async () =>{
    const apiPoke = await getApiInfoPokemons();
    const DbPoke = await getDbInfoPokemons();
    const AllPokemons= [...DbPoke, apiPoke] //apiPoke.concat(DbPoke);

    return AllPokemons;
}

  

module.exports = {getAllPokemons};