const express = require("express");
const {getDirectors,postDirector,putDirector,deleteDirector} = require("../controllers/director.controllers");
const upload = require("../../middlewares/upload.file");

const movieRoutes = express.Router();

movieRoutes.get("/", getDirectors);
movieRoutes.post("/",upload.single("image"), postDirector);
movieRoutes.put("/:id",upload.single("image"), putDirector);
movieRoutes.delete("/:id", deleteDirector);

module.exports= movieRoutes;