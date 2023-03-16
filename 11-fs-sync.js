



const {
    readFile,
    writeFile
} = require('fs');

//without UTF coding, you will get output like
// <Buffer 46 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
//readFile('./content/first.txt', (err,result) =>

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
    }
    const first = result;

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
        }
    });
    const second = result;

    writeFile('./content/result.txt', 'Here are the results  ' + first + second, (err, result) => {
            if (err) {
                console.log(err);
            }});
    
});
