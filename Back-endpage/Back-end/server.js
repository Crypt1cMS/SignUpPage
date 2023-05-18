const express = require('express');
const app = express();
const port = 5174;
var bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/signup/:dato1', (req, res) => {
    const { name, lastname, email, password } = req.body; 

    console.log('Your bluetooth device has connected succesfully!');
    console.log(req.query)
    console.log(req.params)
    conVaciosole.log(req.body)

    res.status(200).send({message: "OK"})
})

app.listen(port, () => {
    console.log(`Servidor arriba en puerto ${port}`)
})