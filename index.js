const express = require("express");
const { Client } = require("pg");
const cors = require("cors");
const config = require("./config");

const app = express();

app.use(express.json());
app.use(cors());

var connectionURL = config.urlConnection;
var cliente = new Client(connectionURL);

cliente.connect((err) => {
    if(err) {
        console.log("Não foi possivel conectar no banco de dados",err);
    }
    cliente.query('SELECT NOW()',(err,result) => {
        if(err){
            console.log("Erro ao executar a query",err);
        }
        console.log(result.rows[0]);
    });
});

app.get("/", (req,res) => {
    console.log("Response OK");
    res.send("Ok - Servidor disponível.");
});

app.listen(config.port, () => {
    console.log("Servidor funcionando da porta" + config.port);
});

app.get("/carros", (req,res) => {
    try {
        cliente.query("SELECT * FROM Carros", function(err,result) {
            if (err){
                return console.error("Erro na execução da query SELECT", err);
            }
            res.send(result.rows);
            console.log("Rota: GET Carros");
        });
        }catch (error){
        console.log(error)
    }
});

module.exports = app;