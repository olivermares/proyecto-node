const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const User = require("../api/models/user.models");


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

module.exports= arrayUsers;

const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL)
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
.finally(()=> mongoose.disconnect());
