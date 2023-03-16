const http = require('http');

//req = incoming request e.g. client is requesting for your webpage
//res = what we send back (response)

const server = http.createServer((req,res) =>
{
    res.write("Welcome to homepage");
    res.end();
}
);

//what port our server listens to 
server.listen(5000);