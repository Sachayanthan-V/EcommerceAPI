// importing all libs and modules
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const routes = require('./routes');
const db = require("./config/mongoose");
const Products = require('./models/products');
const expresslayouts = require('express-ejs-layouts');

app.use(express.urlencoded());
app.use(expresslayouts);
app.set("layout extractStyles", true); 
app.set("layout extractScripts", true);

app.set("view engine", "ejs"); 
app.set("views", "./views");
app.use(express.json()); // using json for API json returning obj
app.use('/', routes); // routing to seperate file for url's

// make a listener to the specified port
app.listen(port, (err)=>{
    if(err){
        console.log(`Error listening on port ::  ${port}`); // incase any error while listening to port
    }
    console.log(`port :: ${port} is up and running...`);
});