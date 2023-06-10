const http = require('http');
//using event emitter api 
const server  = http.createServer()

    server.on('request',(req,res)=>{
        res.end('welcome to the page created by using event emmitter')
    })



server.listen(5000);