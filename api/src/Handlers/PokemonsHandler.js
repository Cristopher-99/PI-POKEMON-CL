// const {Pokemon} = require("../db")
//controllers 
const {getAllPokemons} = require("../Controllers/ControllerPokemon")
const {createPokemonDB, getByName,getById} = require("../Controllers/Controller");

const getAllPokemonsHandler = async (req, res) =>{
    let {name} = req.query
    if(name){
        try {
            res.status(200).send(await getByName(name))
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }else{
        try {
            res.status(200).send(await getAllPokemons())
        } catch (e) {
            res.status(400).json({ error: e.message });
        }  
    }
};

const getIdPokemonHandler  = async (req, res) =>{
    let {id} = req.params;
    if(id){
        try {
            res.status(200).send(await getById(id))
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
}
const createPokemonHandler  = async (req, res) =>{
    let {name,img,health,attack,defense,speed,height,weight,types} = req.body
    if(name){ 
    try {
        const newpoke= await createPokemonDB(name,img,health,attack,defense,speed,height,weight,types);
        res.status(201).send(newpoke);
    }catch (error) {
        res.status(400).json({error: error.message});
    }
}
}


module.exports ={ getAllPokemonsHandler, getIdPokemonHandler, createPokemonHandler} ;
