const express = require("express");
const dotenv = require("dotenv");
//Importamos la dependencia de cors
const cors = require("cors");

//IMPORTAMOS LOS ROUTERS 
const paisesRouter = require("./src/api/routes/paises.routes");
const comidasRouter = require("./src/api/routes/comidas.routes");

const {connect}= require("./src/utils/database")

dotenv.config()

const server = express();

//GRACIAS A ESTAS DOS LINEAS MI SERVIDOR VA A PODER DECODIFICAR Y LEER NUESTRA INFORMACIÓN EN JSON. SI NO SE PONEN NO LO LEE Y VA A BLOQUEARSE EL SERVIDOR


//Nos conectamos a la base de datos
connect();

//CONFIGURAMOS LOS HEADERS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

//CONFIGURAMOS LAS CORS (Aquí definimos quien puede hacer peticiones a mi servidor)
server.use(cors({
    origin: "*",
    credentials: true
}))

//Definimos las rutas padre
server.use("/paises", paisesRouter)
server.use("/comidas", comidasRouter);

const PORT = process.env.PORT || 5000;

//ESCUCHAMOS EL SERVIDOR
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})