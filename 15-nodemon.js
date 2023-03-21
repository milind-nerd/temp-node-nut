// we dont have to use "node filename" to run node files. Use nodemon for this.
// install nodemon => npm i nodemon -D  
// after installing nodemon, see project.json => you will see smt like:
// "scripts": {
//    "start": "node app.js"
//  },

// due to this, now you dont need to run "node app.js", but simply run "npm start" in terminal

// "dev": "nodemon app.js" => use this to keep nodemon running, so whenever you change 
// app.js, it will automatically run the script.
// run command in terminal => nodemon app.js

console.log("Hello people");

// requires like HTTP, you can directly use it in node.
// However, external dependencies like Lodash, you first need to install it.
// to install => npm i bootstrap OR npm i lodash

const _ = require('lodash');

const items = [1, [2, [3, [4] ]]];

// flattenDeep is method in lodash, which you can directly use here since you installed lodash
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello people");


// npm run dev => to run app.js automatically as soon as you change it


