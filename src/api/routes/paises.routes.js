const express = require("express");

const router = express.Router();

const {
  getAllPaises,
  getPaisByID,
  createPais,
} = require("../controllers/paises.controller");

router.get("/", getAllPaises);
router.get("/:id", getPaisByID);
router.post("/", createPais);

module.exports = router;