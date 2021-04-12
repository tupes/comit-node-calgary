const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    productName :String,
    model : String,
    price : String,
    quantity : String
});

const productTable = mongoose.model('products', productSchema);
module.exports = productTable;
