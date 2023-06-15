const express  = require('express');
const app  = express()

app.get('/',(req,res)=>{
    res.status(200).send('home page')
})
app.get('/about',(req,res)=>{
res.status(200).send('about')
})

app.all('*',(req,res)=>{
    // res.send('<h1>$)$ error</h1>')
    res.status(404).send('<h1>page 404 not found</h1>')
})

app.listen(5000,()=>{
    console.log('server is running on port 5000')
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen