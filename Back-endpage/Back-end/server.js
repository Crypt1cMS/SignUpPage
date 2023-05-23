const express = require('express');
const app = express();
const port = 5174;
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors())

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/signup/:dato1', (req, res) => {
    const { name, lastname, email, password } = req.body; 

    console.log('Account successfully created!');
    console.log(req.query)
    console.log(req.params)
    console.log(req.body)

    res.status(200).send({message: "OK"})
})

app.listen(port, () => {
    console.log(`Servidor arriba en puerto ${port}`)
})