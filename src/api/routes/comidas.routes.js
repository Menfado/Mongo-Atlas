const express = require("express");

const router = express.Router();

const {
  getAllComidas,
  getComidaByID,
  createComida,
} = require("../controllers/comidas.controller");

router.get("/", getAllComidas);
router.get("/:id", getComidaByID);
router.post("/", createComida);

module.exports = router;