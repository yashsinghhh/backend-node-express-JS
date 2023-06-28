const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req,res) => {
    res.send("<h1>welcome to home page</h1><a href='/api/products/'>products</a>")
})

app.get("/api/products",(req,res)=>{
res.json(products)
})

app.listen(5000,()=>{
    console.log("server listening to port 5000")
})


// const express = require('express')
// const app = express()
// const {products} = require('./data')


// app.get('/',(req,res)=>{
// res.send("<h1>Welcome to the home page, kindly navigate to the products page to view our listed items</h1><a href='/api/products'>Products</a>")
// })

// app.get('/api/products',(req,res)=>{
//     // res.json(products)
// const newProducts = products.map((product)=>{
//     const {name,id ,image} = product
//     return {name,id,image}
// })

// res.json(newProducts)

// })




// app.listen(5000,()=>{
//     console.log('The server is listening to port 5000')
// })



