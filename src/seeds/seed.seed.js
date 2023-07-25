const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const User = require("../api/models/user.models");
const Movie = require("../api/models/movie.models");

const arrayUsers = [    
    {
        "name": "marta",
        "password": "1234", 
        "role": "admin"
    },
    {
        "name": "miguel",
        "password": "1234", 
        "role": "admin"
    },
    {
        "name": "oliver",
        "password": "1234", 
        "role": "admin"
    },
    {
        "name": "pepe",
        "password": "1234"
    },
    {
        "name": "luis",
        "password": "1234" 
    }
];

const arrayMovies = [
    {
        "title": "Akira",
        "country": "Japon",
        "img": "https://pics.filmaffinity.com/akira-557684565-large.jpg"
    },
    {
        "title": "El club de los poetas muertos",
        "country": "EE.UU",
        "img": "https://www.ennetflix.mx/media/15/la-sociedad-de-los-poetas-muertos_426589.jpg"
    },
    {
        "title": "Los Goonies",
        "country": "EE.UU",
        "img": "https://m.media-amazon.com/images/I/6198vp6P7nL._SX300_SY300_QL70_ML2_.jpg"
    },
    {
        "title": "Parasitos",
        "country": "Corea",
        "img": "https://pics.filmaffinity.com/gisaengchung-432616131-mmed.jpg"
    }
];

const DB_URL= process.env.DB_URL;
//Conexion
mongoose.connect(DB_URL)
//La parte de user

.then(async()=> {
    const allUser = await User.find();
    if (allUser.length > 0) {
        await User.collection.drop();
        console.log("Usuarios borrados");
    }
})
.catch((error)=> console.log("Error al borrar los usuarios",error))
.then(async ()=> {
    const usersMap = arrayUsers.map((user) => new User(user));
    await User.insertMany(usersMap);
    console.log("Usuarios insertados correctamente");
})
.catch((error) => console.log("Error al insertar los usuarios", error))
//La parte de movie
.then(async()=> {
    const allMovie = await Movie.find();
    if (allMovie.length > 0) {
        await Movie.collection.drop();
        console.log("Peliculas borrados");
    }
})
.catch((error)=> console.log("Error al borrar las pelicuas",error))
.then(async ()=> {
    const moviesMap = arrayMovies.map((movie) => new Movie(movie));
    await Movie.insertMany(moviesMap);
    console.log("Pelicuas insertadas correctamente");
})
.catch((error) => console.log("Error al insertar las peliculas", error))
//Desconectar
.finally(()=> mongoose.disconnect());