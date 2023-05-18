var express = require('express');

const route1 = express.Router();

function multiplicar (req, res) {
    res.send({message: "multiplicamos"})
}

route1.post("/", multiplicar);
route1.get("/", multiplicar2);

function multiplicar2 (req, res) {
    res.send({message: "Voy a multiplicar"})
}

module.exports = route1
