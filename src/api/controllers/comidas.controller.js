const Comida = require("../models/comida.models.js");

const getAllComidas = async (req, res, next) => {
  try {
    //Con el populate desgranamos la información del campo videogames ya que es un array de ids de mongo, por lo tanto se me va a pintar la información de cada uno de los objetos correspondientes a esos ids.
    const allComidas = await Comida.find().populate("pais");
    return res.json({
      status: 200,
      message: "Comidas OK",
      comidas: allComidas,
    });
  } catch (error) {
    return next(error);
  }
};

const getComidaByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const comidaByID = await Comida.findById(id);
    return res.json({
      status: 200,
      message: "Comida OK",
      comida: comidaByID,
    });
  } catch (error) {
    return next(error);
  }
};

const createComida = async (req, res, next) => {
  try {
    const newComida = new Comida(req.body);
    const createdComida = await newComida.save();
    return res.json({
      status: 201,
      message: "Comida created",
      console: createdComida,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { getAllComidas, getComidaByID, createComida };