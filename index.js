const express = require("express");
const cors = require("cors");
const config = require("./src/config/config");
const carrosRoutes = require("./src/routes/carrosRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/carros", carrosRoutes);

app.get("/", (req,res) => {
    console.log("Response OK");
    res.send("Ok - Servidor Disponivel");
});

app.listen(config.port, () => 
    console.log("Servido Funcionando na porta " + config.port)
);

module.exports = app;
