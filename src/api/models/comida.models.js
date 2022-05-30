const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ComidaSchema = new Schema(
  {
    nombre: { type: String, required: true },
    imagen: { type: String, required: false },
    descripcion: { type: String, required: false },
    //Vamos a crear un campo llamado videogames que es un array de ids de videojuegos, los videojuegos que yo tengo en mi base de datos
    paises : [
      { type: Schema.Types.ObjectId, ref: "paises", required: false },
    ],
  },
  { timestamps: true }
);

const Comida = mongoose.model("comidas", ComidaSchema);

module.exports = Comida;