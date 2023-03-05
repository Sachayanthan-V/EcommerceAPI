// importing neccessary libs
const express=require('express');
const router=express.Router();
const products = require('./../controllers/products');

// for home. and it will specific users about this API
router.get("/",(req,res)=>{
    return res.send(`
    
    <h1>User route is displaying data</h1>
    <ol>
        <li>
        <h3>For Create a product : </h3> <br>
            Use "POST" query with this url <h2><i>"/products/create"</i></h2> 
            example : {
                id: 2,
                name: camera,
                quantity: 5
            }
        </li><li> 
        <h3>For List/Show a product : </h3>  <br>
            Use "GET      query with this url  <h2><i>"/products/"</i></h2>
        
        </li><li>
        <h3>For Delete a product : </h3>  <br>
            Use "DELETE'  query with this url  <h2><i>"/products/:id"</i></h2>
        </li><li>
        <h3>For Update a product quantity : </h3> <br> 
            Use "POST	  query with this url  <h2><i>"/products/:id/update_quantity/number=10"</i></h2>
        </li>
    </ol>
    `);
});

router.get('/products/', products.getProducts); // for get all products
router.post('/products/create', products.createProduct); // create a new product
router.post('/products/:id/update_quantity/number=:updateCount', products.updateProduct); // update a already presented product
router.delete('/products/:id', products.deleteProduct); // delete a product in DB


module.exports = router; // exporting all routes to globally