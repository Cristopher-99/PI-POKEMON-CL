const {Pokemon, Type} = require ("../db");


const validate =  (req, res, next) => {
    const { name,img,health,attack,defense,speed,height,weight,type } = req.body;
    if (!name ) return res.status(400).json({ error: "Missing name" });
    if (!health) return res.status(400).json({ error: "Missing health" });
    if (!attack) return res.status(400).json({ error: "Missing attack" });
    if (!defense) return res.status(400).json({ error: "Missing defense" });
    if (!speed) return res.status(400).json({ error: "Missing speed" });
    if (!height) return res.status(400).json({ error: "Missing height" });
    if (!weight) return res.status(400).json({ error: "Missing weight" });
    next();
  };
  module.exports = {validate} ;