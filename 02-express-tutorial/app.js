const express = require('express');
const app = express();
const path = require('path');



//SETUP STATIC AND MIDDLEWARE
app.use(express.static('./public'))






// app.get('/',(req,res)=>{
// res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// // now what we had to do earlier was to import all the style sheets, images and js files individually but in express that can be done 
// // in one step using  app.use(express.static ('./public')
// })
app.all('*',(req,res)=>{
    res.status().write('<h1>404 NOT FOUND</h1>')
    res.send()
})







app.listen(5000,()=>{
    console.log('server is listening on port 5000')
})