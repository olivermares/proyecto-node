const express = require("express")
const dotenv = require("dotenv").config()
const cors= require("cors")
const {connect} = require("./src/utils/db")
const comidaRoutes = require("./src/api/routes/comida.routes")

const PORT = process.env.PORT;
const app = express();

connect();
app.use(cors({
        origin:"*",
        credential:true
    }
))

app.use(express.json())

app.use("/comidas",comidaRoutes);

app.listen(PORT,() => console.log(`escuchando en el puerto http://localhost:${PORT}`))


