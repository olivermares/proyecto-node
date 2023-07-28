const express = require("express");
const {getActors,postActor,putActor,deleteActor} = require("../controllers/actor.controllers");
const upload = require("../../middlewares/upload.file");

const actorRoutes = express.Router();

actorRoutes.get("/", getActors);
actorRoutes.post("/",upload.single("image"), postActor);
actorRoutes.put("/:id",upload.single("image"), putActor);
actorRoutes.delete("/:id", deleteActor);

module.exports= actorRoutes;