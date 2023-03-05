const Products = require('./../models/products'); // importing Product Schema

// All functions used by async-await.
// exporting all modules by its own to globally


// Get a product list in mongodb using find function with empty query to return all objects in it. ex : mongodbSchema.find({})
module.exports.getProducts = async function(req, res){

    try {
		let products = await Products.find({},{_id : 0, createdAt : 0, updatedAt: 0, __v: 0});
        if (products == null || products == undefined || products == "") {
            return res.send('No products are there in list try create using "/products/create" with product name and quantity.');
        }
        else {
            // return res.send(`data: { products: [ ${products}]}`);    
            return res.send(`data: {\n\t products: [\n\t\t${products}\n\t]\n}`);
        }

	}catch(err){
		return res.send(`Error occured on Products ${err}`);
	}

}


module.exports.createProduct = async function(req, res) {


    // Assigning new ID by incrementing by 1 with highest available ID in Database.
    let checker = await Products.find({}).sort({'id': -1})
    let ID = 0 ;
    if(checker.length===0){
        ID = 1
    }
    else {
        ID = Number(checker[0].id) + 1;
    }

    // Assigning Object to send to query simply.
    let NAME = req.body.name;
    let QTY = req.body.quantity

    let obj = {
        id : ID ,
        name : NAME , 
        quantity : QTY        
    }

    // checking the product is already present or not. 
    // if present we cannot create again instead we can modify/delete it.
    // if not we creating it with new ID
    await Products
        .find({name: NAME})
        .then( (product) => {

            // checking product present or not in all possible ways...
            if (product===null || product==="" || product===undefined || product.length === 0){
                Products
                .create( obj )
                .then( (products)=> {
                    return res.send(`New product is created successfully \n\n\n data: {\n\tproduct: {\n\t\tid : ${products.id},\n\t\tname : "${products.name}",\n\t\tquantity : ${products.quantity} \n\t}\n}`); 
                }).catch( (err) => {
                    if(err){return res.send(`Error while creating a products \n ${err}`); return; }
                });
       
            }
            else {
                return res.send(` <h1>Product ID is already available</h1>. Cannot create duplicate. Try with different ID`);
            }
        })
        .catch( (err) => {
            return res.send(`Error occcured while finding by ID :: ${err}`);
        });

}


// updating product by ID, 
module.exports.updateProduct = async function(req, res) {

    let ID = req.params.id;

    // checking the ID is present in database or not.
    // if not we cannot change it
    // if yes we modify only quantity in particular product.
    await Products
        .find({id: ID})
        .then( (product) => {
            let getProduct = product;

            // checking product present or not in all possible ways...
            if (product===null || product==="" || product===undefined || product.length === 0){
                return res.send(`Product is not found. Instead create it newly!...`);
            }
            else {
                let change = Number(getProduct[0].quantity) + Number(req.params.updateCount);

                let doc = Products
                            .findOneAndUpdate({id : ID}, {quantity : change}, {new: true})
                            .then( (UpdatedProduct) => {
                                // return res.send(`Updated Product ${UpdatedProduct}`);
                                return res.send(`New product is created successfully \n\n\n data: {\n\tproduct: {\n\t\tid : ${UpdatedProduct.id},\n\t\tname : "${UpdatedProduct.name}",\n\t\tquantity : ${UpdatedProduct.quantity} \n\t}\n}`); 
                            })
                            .catch((err)=>{
                                return res.send(`Error innerproduct update ${err}`);
                            });
            }
        
        })
        .catch( (err) => {
            return res.send(`Error occcured while finding by ID :: ${err}`);
        });
        // return res.json(obj);

}

// Deleting a product using its ID
module.exports.deleteProduct = async function(req, res) {

    // checking the product is available or not in database
    await Products
        .findOneAndDelete({id: req.params.id})
        .then( (product)=>{
            if (product===null || product==="" || product===undefined || product.length === 0){ // if its not found/ present in DB
                return res.send(`Product not found...`);
            }
            return res.send(`data: {\n\tmessage: “product deleted”\n}`); // product found and deleted
        })
        .catch( (err)=>{
            return res.send('Error while deleting an Product');
        });

}