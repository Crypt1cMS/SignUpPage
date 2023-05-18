const express = require('../express');
const app = express();
const port = 5174;


app.use(express.json());

app.post('/signup', (req, res) => {
    const { name, lastname, email, password } = req.body; 

    console.log('Your bluetooth device has connected succesfully!');
    console.log(name)

    res.send(200)
})

app.listen(port, () => {
    console.log(`Servidor arriba en puerto ${port}`)
})

