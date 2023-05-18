var express = require('express');

const route1 = express.Router();

function dividir (req, res) {
    res.send({message: "dividimos"})
}

route1.post("/", dividir);
route1.get("/", dividir2);

function dividir2 (req, res) {
    res.send({message: "Voy a dividir"})
}

module.exports = route1
