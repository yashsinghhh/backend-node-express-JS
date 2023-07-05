const express = require("express")
const app = express()
const {products}  = require('./data')

app.get('/',(req,res)=>{
    res.send("<h1>Home Page</h1><a href='/productpage'>products</a>")
})

app.get("/productpage",(req,res)=>{
    const filterProd = products.map((product)=>{
        const {name, price , image } = product
        return {name, price,image}

    // res.status(200).send("<h1>Home Page</h1>")
    
})
res.json(filterProd)
})

app.get("/productpage/:productID",(req,res)=>{
    // console.log(req.params)/
    const {productID} = req.params

    const singleproduct = products.find(
        (product)=> product.id === Number(productID))

        if (!singleproduct) {
            res.status(404).send("error 404 page not found")
    }
    return res.json(singleproduct)
})

app.get('/productpage/filter/query',(req,res)=>{
    const {search, limit} = req.query
    const sortedproducts = [...products]

    if (search) {
        sortedproducts = sortedproducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedproducts = sortedproducts.slice(0,(limit))
    }
    if (sortedproducts<1) {
        res.status(200).json({ sucess: true, data: [] })

    }

})





app.listen(5000,()=>{
    console.log('server is listening to port 5000')
})