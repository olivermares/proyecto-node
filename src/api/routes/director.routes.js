const express = require("express")
const {getDirectors,postDirector,putDirector,deleteDirector} = require("../controllers/director.controllers")

const movieRoutes = express.Router();

movieRoutes.get("/", getDirectors);
movieRoutes.post("/", postDirector);
movieRoutes.put("/:id", putDirector);
movieRoutes.delete("/:id", deleteDirector);

module.exports= movieRoutes;