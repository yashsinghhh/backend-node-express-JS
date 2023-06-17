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




app.listen(5000,()=>{
    console.log('The server is listening to port 5000')
})

// here we need to focus on when we used the map function or any other function we can only use that when
// we import as const {products} = require('./data')
// only const products = require('./data') will not work 