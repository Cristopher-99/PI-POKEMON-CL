const {Pokemon} = require("../db")
const {getAllPokemons} = require("../Controllers/ControllerDbApiPoke")
const {createPokemonDB, getByName,getById} = require("../Controllers/ControllerPokemon");

const getAllPokemonsHandler = async (req, res) =>{
    const {name} = req.query
    if(name){
        if(await getByName(name)==="No se encontro el Pokemon") return res.status(400).json();
        try {
            res.status(200).json(await getByName(name))
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }else{
        try {
            res.status(200).json(await getAllPokemons())
        } catch (e) {
            res.status(400).json({ error: e.message });
        }  
    }
};

const getIdPokemonHandler  = async (req, res) =>{
    const {id} = req.params;
    if(id){
        try {
            res.status(200).send(await getById(id))
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
}
const createPokemonHandler  = async (req, res) =>{
    const {name,img,health,attack,defense,speed,height,weight,types} = req.body
    // SE PUEDE MODULARIZAR MAS ...
    const findPoke = await Pokemon.findOne({ where: { name: name.toLowerCase()}})
    if (findPoke){
        return res.status(400).send(`El nombre ${name} ya esta en uso`);
    } else {
        try {
            await createPokemonDB(name,img,health,attack,defense,speed,height,weight,types);
            res.status(201).send("El pokemon se creo correctamente");
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }


}



module.exports ={ getAllPokemonsHandler, getIdPokemonHandler, createPokemonHandler} ;
