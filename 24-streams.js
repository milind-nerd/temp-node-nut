//video 46

const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt');

stream.on('data', (result) =>
{
    //data will be printed in chunks => https://nodejs.org/api/stream.html#event-data
    console.log(result);
});

