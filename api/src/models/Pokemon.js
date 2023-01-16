const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
      unique: true
    },

    img: {
      type: DataTypes.STRING,
      defaultValue : 'https://www.svgrepo.com/show/276264/pokeball-pokemon.svg'
    },
    health: {
      type: DataTypes.INTEGER,
    },

    attack: {
      type: DataTypes.INTEGER,
    },

    defense: {
      type: DataTypes.INTEGER,
    },

    speed: {
      type: DataTypes.INTEGER,
    },

    height: {
      type: DataTypes.FLOAT,
    },

    weight: {
      type: DataTypes.FLOAT,
    },

    created:{
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true,
     }
  },{timestamps: false});
};
