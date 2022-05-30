const Pais = require("../models/pais.models");

//Recuperamos todos los videojuegos
const getAllPaises = async (req, res, next) => {
  try {
    const allPaises = await Pais.find();
    return res.json({
      status: 200,
      message: "Paises OK",
      paises: allPaises,
    });
  } catch (error) {
    return next(error);
  }
};

//Recuperamos un videojuego por ID
const getPaisByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const paisByID = await Pais.findById(id);
    return res.json({
      status: 200,
      message: "Pais OK",
      pais: paisByID,
    });
  } catch (error) {
    return next(error);
  }
};

//Crear un nuevo videojuego
const createPais = async (req, res, next) => {
  try {
    const newPais = new Pais (req.body);
    const createdPais = await newPais.save();
    return res.json({
      status: 201,
      message: "Pais created",
      pais: createdPais,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { getAllPaises, getPaisByID, createPais };
