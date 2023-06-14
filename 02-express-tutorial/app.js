const { readFileSync } = require('fs');
const http  = require('http');


// ADD your DEPENDENT FILES
const homePage  = readFileSync('./navbar-app/index.html') 
const homestyles  = readFileSync('./navbar-app/styles.css') 
const homeImage  = readFileSync('./navbar-app/logo.svg') 
const homeLogic  = readFileSync('./navbar-app/browser-app.js') 







const server = http.createServer((req,res)=>{

// console.log(req.method)
// console.log(req.url)
const url  = req.url;
if( url === '/')  {
    res.writeHead(200,{'content-type':'text/html'}) // if here the /html is changed to /plain then it will render the html code as text 
res.end(homePage)

console.log(url)
}
else if ( url === '/about') {
    res.writeHead(200, {'content-type':'text/html'})
    res.end('<h1> about page </h1>')
}
else if ( url === '/styles.css') {
    res.writeHead(200, {'content-type':'text/css'})
res.end(homestyles)
}
else if ( url === '/logo.svg') {
    res.writeHead(200, {'content-type':'image/svg+xml'})
res.end(homeImage)
}
else if ( url === '/browser-app.js') {
    res.writeHead(200, {'content-type':'text/javascript'})
res.end(homeLogic)
}
else{
    res.writeHead(404, {'content-type':'text/html'})
    res.end('<h1> ERROR!! PAGE NOT FOUND </h1>')
}




})

server.listen(5000)

// the user will request for resources
// the user authentication will be pre to the the rendering process
// call the function before executing the GET POST
// the 404 page will not render the html file due to the inaccurate page code 
// check network terminal to authorize the application sign in 