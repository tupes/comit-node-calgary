const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String
});

const user100 = mongoose.model('userTable',userSchema)

module.exports = user100; 

