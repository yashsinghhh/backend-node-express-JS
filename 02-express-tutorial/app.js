const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req,res) => {
    res.send("<h1>welcome to home page</h1><a href='/api/products/'>products</a>")
})

app.get("/api/products",(req,res)=>{
// res.json(products)
const newProducts = products.map((product)=>{
    const {name, image, price} = product
    return { name, image ,price}
})
res.json(newProducts)
})

app.get("/api/products/:productID",(req,res) =>{
    console.log(req)
    console.log(req.params)
    const {productID} = req.params
})


app.listen(5000,()=>{
    console.log("server listening to port 5000")
})





