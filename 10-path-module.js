const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first, second);

//write contect into new file -> if file does not exist, node will create
//one

writeFileSync('./content/result-sync.txt', 'Here are the results  '+first+second, {flag: 'a'});






