const express = require('express')
const app = express()
const {products} = require('./data.js')

app.get('/', (req,res) => {
    res.send("<h1>welcome to home page</h1> <a href="/api/products/">products</a>")
})

app.listen(5000,()=>{
    console.log("server listening to port 5000")
})