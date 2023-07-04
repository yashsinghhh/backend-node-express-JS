const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.status(200).send("<h1>Home Page</h1>")
})

app.listen(5000,()=>{
    console.log('server is listening to port 5000')
})