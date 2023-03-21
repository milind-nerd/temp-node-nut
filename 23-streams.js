//video 46 
/* STREAMS
Writeable
Readable
Duplex
Transform
 */

//video 46 
/* STREAMS => in case you have really big file to read, using normal "readFileSync" would not work => Use streams:
Writeable
Readable
Duplex
Transform
 */

const { writeFileSync, writeFile } = require('fs');
//create really big test
for(let i=0; i<=100; i++)
{
    writeFileSync('./content/big.txt', 'hello, number is :' + i + '\n', { flag : 'a'});
}

