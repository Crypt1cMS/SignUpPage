const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dylan = Schema ({
    Name: String,
    // lastName: String,
    // email: String,
    // password: String,
})//, {timestamps: true});

module.exports = mongoose.model('dylan', dylan);    