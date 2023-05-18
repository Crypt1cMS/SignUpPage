var express = require('express');

const route1 = express.Router();

function restar (req, res) {
    res.send({message: "restamos"})
}

route1.post("/", restar);
route1.get("/", restar2);

function restar2 (req, res) {
    res.send({message: "Voy a restar"})
}

module.exports = route1
