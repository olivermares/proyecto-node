const express = require("express")
const {getActors,postActor,putActor,deleteActor} = require("../controllers/actor.controllers")

const actorRoutes = express.Router();

actorRoutes.get("/", getActors);
actorRoutes.post("/", postActor);
actorRoutes.put("/:id", putActor);
actorRoutes.delete("/:id", deleteActor);

module.exports= actorRoutes;