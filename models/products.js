const mongoose = require('mongoose'); // importing a mongoose lib to make use of schema 

// creating a schema with specific structure
const productSchema = new mongoose.Schema({

    id : {
        type : String,
        required : true,
        unique : true
    },
    name: {
        type : String, 
        required : true
    },
    quantity : {
        type : String, 
        required : true
    }

}, {
    timestamps : true
});

const Products = mongoose.model('Products', productSchema); // making a model with schema

module.exports = Products; // exporting to globally