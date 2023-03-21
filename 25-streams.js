//video 47

const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000,
    encoding: 'utf-8'
});

stream.on('data', (result) =>
{
    //data will be printed in chunks => https://nodejs.org/api/stream.html#event-data
    console.log(result);
});

stream.on('error', (err) =>
{
    console.log(err);
});

//default buffer size: 64kb => you can control it, using highWaterMark
// use 'utf-8' for proper text

