const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    //   const text = fs.readFileSync('./content/big.txt', 'utf-8');
    //   res.end(text);
    const fileStream = fs.createReadStream('./content/big.txt', 'utf-8');

    fileStream.on('open', () => {
        fileStream.on('open', () => {
            fileStream.pipe(res);
        });
    });

    fileStream.on('error', (err) => {

    });
}).listen(5000);
//using line 6-7 method (readFileSync), total content-length in network tab is "Content-Length: 228914".
// this slows down the entire app
