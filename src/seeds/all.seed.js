const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const User = require("../api/models/user.models");
const Movie = require("../api/models/movie.models");

const arrayUser = require("./user.seed");
const arrayMovies = require("./movie.seed");

const DB_URL= process.env.DB_URL;

//Funcion privada  
function seed(array, Model){   
    mongoose.connect(DB_URL)
    .then(async()=> {
        const all = await Model.find();
        if (all.length > 0) {
            await Model.collection.drop();
            console.log(`Borrada correctamente`);
        }
    })
    .catch((error)=> console.log(`Error al borrar`,error))
    .then(async ()=> {
        const allMap = array.map((element) => new Model(element));
        await Model.insertMany(allMap);
        console.log(`Insert correctamente`);
    })
    .catch((error) => console.log(`Insert error`, error))
    .finally(()=> mongoose.disconnect());
}

seed(arrayMovies, Movie);
seed(arrayUser, User);