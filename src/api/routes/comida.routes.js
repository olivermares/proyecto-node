const express = require("express")
const {getComidas,postComidas,putComida,deleteComida} = require("../controllers/comida.controllers")

const comidaRoutes = express.Router();

comidaRoutes.get("/", getComidas);
comidaRoutes.post("/", postComidas);
comidaRoutes.put("/:id", putComida);
comidaRoutes.delete("/:id", deleteComida);


module.exports= comidaRoutes;