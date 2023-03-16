
const http = require('http');

const server = http.createServer((req, res ) =>
{
 if(req.url === '/')
 {
    res.end("Homepage !");
 }
 else if(req.url === '/about')
 {
    res.end("About Page of our company !");
 }
 else
 {
    res.end("The page you requested is not found !");
 }
}
);

server.listen(5001);

