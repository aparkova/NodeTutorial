const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('We are in about now')
    }
    res.end(`
    <h1>Opaa!</h1>
    <p>Page not found</p>
    <a href = '/'> back home</a>
    `)
})

server.listen(5000)