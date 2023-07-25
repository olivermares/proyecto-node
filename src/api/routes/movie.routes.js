const express = require("express")
const {getMovies,postMovie,putMovie,deleteMovie} = require("../controllers/movie.controllers")

const comidaRoutes = express.Router();

comidaRoutes.get("/", getMovies);
comidaRoutes.post("/", postMovie);
comidaRoutes.put("/:id", putMovie);
comidaRoutes.delete("/:id", deleteMovie);


module.exports= comidaRoutes;