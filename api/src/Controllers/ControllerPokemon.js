const {Pokemon, Type} = require("../db");
const axios = require("axios");

const searchPokeDB = async (id , name) =>{//busca pokemons en BD por id o nombre 
    if(id){
        let poke = await Pokemon.findAll({
            where:{id : id} ,
            include:{
                model: Type,
                attributes:['name'],
                through: {
                    attributes: []
                }
            }
        })
        return poke[0]
    }else{
      let pokeCreated = await Pokemon.findAll({
            where:{name : name} ,
            include:{
                model: Type,
                attributes:['name'],
                through: {
                    attributes: []
                }
            }
          })
      return pokeCreated[0]
    }
  };
const getDetail = async (name_id)=>{//trae 1 pokemon por ID o Nombre de la Api
    try {
      let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name_id}`)
      let pokemon = {
        id: response.data.id,
        name: response.data.name,
        img: response.data.sprites.other.dream_world.front_default,
        health: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        speed: response.data.stats[5].base_stat,
        height: response.data.height,
        weight: response.data.weight,
        types: response.data.types.map((t) =>{
          return{
            name : t.type.name
          }
        }),
      }
    return pokemon
    }catch(error){
      return 'Pokemon No Encontrado';
    }
    
};
const createPokemonDB = async (name,img,health,attack,defense,speed,height,weight,types)=>{//crea los Pokemons en BD
    try {
        // const findPoke = await Pokemon.findOne({ where: { name: name.toLowerCase()} });
        let createPokemon = await Pokemon.create({
            name,
            img,
            health,
            attack,
            defense,
            speed,
            height,
            weight,
         })
        
        let typesDB = await Type.findAll({
            where:{name : types} 
            })
        
        await createPokemon.addType(typesDB)
        let poke = await Pokemon.findAll({
            where:{name : name} ,
            include:{
                model: Type,
                attributes:['name'],
                through: {
                    attributes: []
                }
            }
        })
        return poke[0]

    } catch (error) {
      return  {error: error.message}    //{ message:'No se pudo crear el Pokemon' }
    }
    
  };
  
const getByName = async (name)=>{ //busca por nombre en BD y Api
    let searchDB = await searchPokeDB(null,name)
    if(searchDB) return [{
         id:searchDB.id,
         name: searchDB.name,
         img: searchDB.img,
         health: searchDB.hp,
         attack: searchDB.attack,
         defense: searchDB.defense,
         speed: searchDB.speed,
         height: searchDB.height,
         weight: searchDB.weight,
         created: searchDB.created,
         types: searchDB.types?.map(e=>e.name)}]
    //----------------------------------------------------------
    let searchApi = await getDetail(name) 
    // console.log(searchApi,'-->server Name')
    if(searchApi === 'Pokemon No Encontrado'){
      return "No se encontro el Pokemon"
    }
    return [{...searchApi,
      types: searchApi.types?.map(e=>e.name)}]
};
  
const getById = async (id)=>{//busca por ID en BD y Api
    if(Number(id)){ // si es number busca en la api
      return await getDetail(id)
    }else{
      return searchPokeDB(id,null)
    }
    return "error"
};

module.exports = {createPokemonDB, getById, getByName}