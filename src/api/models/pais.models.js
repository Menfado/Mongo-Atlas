
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PaisSchema = new Schema(
  {
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    habitantes: { type: String, required: false },
    lenguaMaterna: { type: String, required: false },
  },
  { timestamps: true }
);

const Pais = mongoose.model("paises", PaisSchema);

module.exports = Pais;