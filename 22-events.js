//video 45 => https://nodejs.org/api/http.html#event-request

const http = require('http');
const server = http.createServer();

/* Different approach then we did in file 12-http-module.js
const server = http.createServer((req,res) =>
{
    res.write("Welcome to homepage");
    res.end();
}
);*/

//server has method "on", which we use to listen request
server.on('request', (req, res) =>
{
    res.end('connection established');
}
);

server.listen(5000);