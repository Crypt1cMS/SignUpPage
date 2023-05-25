const express = require('express');
const app = express();
const port = 5174;
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors())
var dylan = require("./Usuario")


const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const password = "FrSfzoVbR5rHcUg9"
const Dbname = "Pagina"
const mongoDB = `mongodb+srv://Dylan-Gustavo-Carlo:${password}@users100.b27jvbd.mongodb.net/carlos`;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

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

app.get('/leer/:nombre', async (req, res) => {
    const name = req.params.nombre;
    console.log(name)
    var response = await dylan.find({}).exec()
    console.log(response)
    res.status(200).send({response})

})