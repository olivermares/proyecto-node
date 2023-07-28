const express = require("express")
const {getMovies,postMovie,putMovie,deleteMovie} = require("../controllers/movie.controllers")
const {isAuth, isAdmin} =require("../../middlewares/auth");
const upload = require("../../middlewares/upload.file");

const movieRoutes = express.Router();

movieRoutes.get("/", getMovies);
movieRoutes.post("/",upload.single("image"), postMovie);
movieRoutes.put("/:id",upload.single("image"), putMovie);
movieRoutes.delete("/:id", deleteMovie);

module.exports= movieRoutes;