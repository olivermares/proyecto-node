const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const User = require("../api/models/user.models");
const Movie = require("../api/models/movie.models");
const Director = require("../api/models/director.models");
const Actor = require("../api/models/actor.models");

const arrayUsers = [    
    /*
    {
        "email": "marta@miweb.com",
        "password": "aA123456", 
        "role": "admin"
    },
    {
        "email": "miguel@miweb.com",
        "password": "aA123456", 
        "role": "admin"
    },
    {
        "email": "oliver@miweb.com",
        "password": "aA123456", 
        "role": "admin"
    },
    {
        "email": "pepe@miweb.com",
        "password": "aA123456"
    },
    {
        "email": "luis@miweb.com",
        "password": "aA123456" 
    }
    */
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

const arrayDirector =[
    {
        "name": "Quentin Tarantino",
        "country": "USA",
        "img": ""
    },
    {
        "name": "Pedro Almodovar",
        "country": "España",
        "img": "https://upload.wikimedia.org/wikipedia/commons/4/44/Pedro_Almod%C3%B3var_at_Premios_Goya_2017_1_%28cropped%29.jpg"
    },
    {
        "name": "Cristopher Nolan",
        "country": "USA",
        "img": "https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        "name": "Taika Waititi",
        "country": "USA",
        "img": "https://media.vandalsports.com/i/640x360/6-2023/20236192829_1.jpg"
    },
];

const arrayActor = [
    {
        "name": "Quentin Tarantino",
        "country": "USA",
        "img": "https://valenciaplaza.com/public/Image/2023/5/EuropaPress_2628194_02_february_2020_england_london_american_filmmaker_quentin_tarantino_NoticiaAmpliada.jpg"
    },
    {
        "name": "Pedro Almodovar",
        "country": "España",
        "img": "https://upload.wikimedia.org/wikipedia/commons/4/44/Pedro_Almod%C3%B3var_at_Premios_Goya_2017_1_%28cropped%29.jpg"
    },
    {
        "name": "Cristopher Nolan",
        "country": "USA",
        "img": "https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        "name": "Taika Waititi",
        "country": "USA",
        "img": "https://media.vandalsports.com/i/640x360/6-2023/20236192829_1.jpg"
    },
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
//Directores
.then(async()=> {
    const allDirector = await Director.find();
    if (allDirector.length > 0) {
        await Director.collection.drop();
        console.log("Director borrados");
    }
})
.catch((error)=> console.log("Error al borrar las director",error))
.then(async ()=> {
    const directorMap = arrayDirector.map((direcor) => new Director(direcor));
    await Director.insertMany(directorMap);
    console.log("Director insertadas correctamente");
})
.catch((error) => console.log("Error al insertar las director", error))
//Actors
.then(async()=> {   
    const allActor = await Actor.find();
    if (allActor.length > 0) {
        await Actor.collection.drop();
        console.log("Actores borrados");
    }
})
.catch((error)=> console.log("Error al borrar las actor",error))
.then(async ()=> {
    const actorMap = arrayActor.map((actor) => new Actor(actor));
    await Actor.insertMany(actorMap);
    console.log("Actor insertadas correctamente");
})
.catch((error) => console.log("Error al insertar las actor", error))
//Desconectar
.finally(()=> mongoose.disconnect());