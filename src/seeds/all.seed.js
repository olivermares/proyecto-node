const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const User = require("../api/models/user.models");
const Movie = require("../api/models/movie.models");

const arrayUser = require("./user.seed");
const arrayMovies = require("./movie.seed");

const DB_URL= process.env.DB_URL;

seed(arrayUser,User);
seed(arrayMovies,Movie);


//Funcion privada  
function seed(array, Model){
    mongoose.connect(DB_URL)
    .then(async()=> {
        const all = await Model.find();
        if (all.length > 0) {
            await Model.collection.drop();
            console.log(`${Model} borrada`);
        }
    })
    .catch((error)=> console.log(`Error al borrar ${Model}`,error))
    .then(async ()=> {
        const allMap = array.map((element) => new Model(element));
        await Model.insertMany(allMap);
        console.log(`Insert ${Model} correctamente`);
    })
    .catch((error) => console.log(`Insert ${Model} error`, error))
    .finally(()=> mongoose.disconnect());
}


/*
.then(async()=> {
    const allMovies = await Movie.find();
    if (allMovies.length > 0) {
        await Movie.collection.drop();
        console.log("Pelicula borrada");
    }
})
.catch((error)=> console.log("Error al borrar las Pelicuas",error))
.then(async ()=> {
    const moviesMap = arrayMovies.map((movie) => new Movie(movie));
    await Movie.insertMany(moviesMap);
    console.log("Peliculas insertadas correctamente");
})
.catch((error) => console.log("error insertando las Peliculas", error))
*/
