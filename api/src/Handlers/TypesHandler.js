// const {Types} = require("../db")
const {getAllTypes} = require("../Controllers/ControllerType");

const getTypesHandler = async (req, res) =>{
    try {
        res.status(200).send(await getAllTypes())
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

module.exports = {getTypesHandler};