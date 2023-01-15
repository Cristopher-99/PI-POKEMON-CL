const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('type' , {
        name: {
            type: DataTypes.STRING ,
            allowNull: false,
        },
        created: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
          },
        // id: {
        //     type: DataTypes.INTEGER,
        //     defaultvalue: DataTypes.UUIDV4,
        //     primaryKey: true
        // },
        
    },
    {timestamps: false}
    );

}