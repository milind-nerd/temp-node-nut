/*console.log("First Line");

setTimeout(() => 
{
    console.log("Second Line");
},100
);
console.log("Third Line");
console.log("Fourth Line");
console.log("Fifth Line");
console.log("Sixth Line");
console.log("Seventh Line");
console.log("Eighth Line");

==> Second Line will be printed always after all console.logs are executed
*/

/*
const {
    readFile
} = require('fs');

console.log("First Line");

!!! CHECK FILE PATH !!!
readFile('./content/first.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Second Line: " + result);
    }

);
console.log("Third Line");

=> console.log("Second Line: " + result) executes last
*/

/*
setInterval(() =>
{
    console.log("First Line");   
}, 2000

);
console.log("Second Line");   

with above code, first line will be keep getting printed => because setInterval is asynchronous
if we have used setTimeOut instead, this issue will not be there (video 37)
*/