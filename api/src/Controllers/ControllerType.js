const {Pokemon, Type} = require("../db");
const axios = require("axios");

const CreateTypesDB = async (arrTypes) => {//crea los tipos en BD
    arrTypes.forEach((genre) => {
      Type.findOrCreate({
        where: { name: genre },
      });
    });
     let alltypes = await Type.findAll()
    return alltypes.map(e=>e.name)//.toString().trim().split(',')
  };

  const getAllTypes = async () => {//trae y cargas los tipos en BD
    let alltypes = await Type.findAll();
    if (alltypes.length !== 0) {
      return alltypes.map(e=>e.name)
    } else {
      try {
        let response = await axios.get(`https://pokeapi.co/api/v2/type`);
        let typesApi = response.data.results.map((genre) => {
          return genre.name;
        });
        const typesDb = await CreateTypesDB(typesApi); //crea y llama los types desde la BD
          return typesDb;
          
      } catch (error) {
        return error;
      }
      
    }
  
  };
  module.exports = {CreateTypesDB, getAllTypes}