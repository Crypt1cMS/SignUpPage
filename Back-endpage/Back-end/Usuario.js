const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Usuario = Schema ({
    name: String,
    lastName: String,
    email: String,
    password: String,
}, {timestamps: true});

module.exports = mongoose.model('usuario', usuario);