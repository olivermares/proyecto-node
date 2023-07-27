const express = require("express")
const {getMovies,postMovie,putMovie,deleteMovie} = require("../controllers/movie.controllers")
const {isAuth, isAdmin} =require("../../middlewares/auth");

const movieRoutes = express.Router();

movieRoutes.get("/", getMovies);
movieRoutes.post("/", postMovie);
movieRoutes.put("/:id", putMovie);
movieRoutes.delete("/:id", deleteMovie);

module.exports= movieRoutes;