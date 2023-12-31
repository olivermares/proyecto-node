const express = require("express");
const {register,login} = require("../controllers/user.controllers");
const {isAuth, isAdmin} =require("../../middlewares/auth")
const userRoutes = express.Router();

userRoutes.post("/register", register);
userRoutes.post("/login", login);

module.exports= userRoutes;