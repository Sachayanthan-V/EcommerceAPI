const mongoose = require('mongoose'); // importing a mongoose lib

mongoose.connect('mongodb://127.0.0.1:27017/products'); // assigning by localhost server with db name as products

const db = mongoose.connection; // connecting to the server

db.on('error', (err)=>{console.log(`Error occured while connecting to DB ::  mongodb \n Error : ${err}`)}); // incase any error while connecting to db

db.once('open', ()=>{console.log(`Successfully connected to the database :: mongodb`)}); // if db connected successfully open the connection

module.exports = db; // exporting to globally available.