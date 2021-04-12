const mongoose = require('mongoose');
const employeeSchema = mongoose.Schema({
fullName: String,
email: String,
phone: String,
city: String
});

const employeesCollection = mongoose.model('employees', employeeSchema);
module.exports = employeesCollection;