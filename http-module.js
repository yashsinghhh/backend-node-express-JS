const http = require('http');
const server = http.createServer((req,res)=>{
// here the request req is what the user is requesting the server to do
// the res response is what the server is responding to the user
if(req.url === '/'){
res.end('Welcome to our home page')
return;
}
if(req.url === '/about'){
    res.end('Welcome to our about page')
    return;
    }
res.end(`
    <h1>Oops!</h1>
    <a href="/">home</a>
`)
})

server.listen(5000);