const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end('Welcome to our homepage!')
    }
    if(req.url === '/about'){
        res.end('This is our short history')
    }else{
    res.end(`
    <h1>Opss!</h1>
    <p>We cant find the page you are looking for</p>
    <a href="/">back home</a>`)
    }
})

server.listen(5000)