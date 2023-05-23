

const express = require('express');
const route1 = express.Router();

route1.post("/", sumar);

function sumar (req, res) {
    // let { num1, num2 } = req.body;
    console.log(req.body)
    // let result = num1 + num2;
    // res.send({ result: result})
};

module.exports = route1


// post te permite mandar info, por medio de parametros
// get para obtener info de una URL

