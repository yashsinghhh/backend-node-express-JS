const express = require('express')
const app = express()
const {products} = require('./data')


app.get('/',(req,res)=>{
res.send("<h1>Welcome to the home page, kindly navigate to the products page to view our listed items</h1><a href='/api/products'>Products</a>")
})

app.get('/api/products',(req,res)=>{
    // res.json(products)
const newProducts = products.map((product)=>{
    const {name,id ,image} = product
    return {name,id,image}
})

res.json(newProducts)

})


// app.get('/api/products/1',(req,res)=>{
   
//     const singleProduct  = products.find((product)=>product.id === 1)

// res.json(singleProduct)

// })

app.get('/api/products/:productID',(req,res)=>{
//    console.log(req)
//    console.log(req.params)

// so we saw that params has the info of the product id which in this case is a number what we can do is 
// we can take the product id from the params and use it === number(productID)
// usually product id is a string

const {productID} = req.params
    const singleProduct  = products.find((product)=>product.id === Number(productID))
    if(!singleProduct){
        return res.status(404).send("product does not exist")
    }

return res.json(singleProduct)

})






app.listen(5000,()=>{
    console.log('The server is listening to port 5000')
})

// here we need to focus on when we used the map function or any other function we can only use that when
// we import as const {products} = require('./data')
// only const products = require('./data') will not work 