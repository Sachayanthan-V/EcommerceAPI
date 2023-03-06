
# Hi, I'm Sachayanthan! 👋
##


# Ecommerce API

This is an API for Ecommerce product list and we can able to perform curd operations in it.

### NOTE :
- #### Use a postman to check all functions. 
- #### [ id - GIVE "ID" of the product ]

## API Reference

********************************************************************

- ### For home page : 
```http
  GET https://ecommerceapi-cjff.onrender.com/ 
```
- ### For Get products list in json: 
```http
  GET https://ecommerceapi-cjff.onrender.com/products/
```
- ### To Create a new product in this list : 
```http
  POST https://ecommerceapi-cjff.onrender.com/products/create/
```
| POSTMAN   | Type     | example String             |
| :-------- | :------- | :------------------------- |
| `body raw json` | `json` | **Required**. { "name": "phone","quantity": "12"} |

- ### To update product : 
[number either be positive or negative to update product quanity] : 
```http
  POST https://ecommerceapi-cjff.onrender.com/products/:id/update_quantity/?number=10
```

- ### To Delete a product :
```http
DELETE https://ecommerceapi-cjff.onrender.com/products/:id
```



## Run Locally

Clone the project

```bash
  git clone https://github.com/Sachayanthan-V/EcommerceAPI.git
```

Go to the project directory :  for ex;

```bash
  cd EcommerceAPI
```

Install dependencies

```bash
  npm install express nodemon mongodb mongoose express-ejs-layouts ejs 
```

Start the server

```bash
  npm start
```


## Screenshots

![CREATE](https://user-images.githubusercontent.com/62072100/223044932-682a0274-2f30-4786-9a0f-049a789b8153.png)
![UPDATE](https://user-images.githubusercontent.com/62072100/223044938-779874fe-faea-45c1-aa25-68e956a56612.png)
![DELETE](https://user-images.githubusercontent.com/62072100/223044942-d328081a-dc37-46c5-a5d3-5be1e6e5cc09.png)
![GET](https://user-images.githubusercontent.com/62072100/223044947-e52fc020-8821-43ab-b6c8-fa866891bad4.png)

## Authors

- [@Sachayanthan-V](https://github.com/Sachayanthan-V)


## 🚀 About Me
I'm a full stack developer...


## 🛠 Skills
Javascript, HTML, CSS, scsss, python, Full stack dev, nodejs, express, bootstrap, jquery, vue, react and some other frame works...

### Thank you all 👋👋 we will get back soon.
