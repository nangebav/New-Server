const http = require('http');


const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/text':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Esta es la primera vista');
            break;
        case '/json':
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 200;
            res.end(`{"message": "This is a JSON response"}`);
            break;
    
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Resource not found"}));
            break;
    } 


});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});