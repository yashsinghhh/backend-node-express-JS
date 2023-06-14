const http  = require('http');

const server = http.createServer((req,res)=>{
res.writeHead(200,{'content-type':'text/html'}) // if here the /html is changed to /plain then it will render the html code as text 
res.end(<h1> Home Page  </h1>)
// here the 200 is the status code that must be provided before defining the headers in writeHead
// if we are coding the frontend in res.write then res.end must be called.
// res.end('home page ( here we have used this to show that all the content has been sent and so that the page could be loaded)')
})

server.listen(5000)

// we need to use res.end to run the web page 

// STATUS CODES 
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

//Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)


// MIME types 
// type/subtype -- 'text/html'
