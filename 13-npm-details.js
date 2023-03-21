// npm - global command, comes with node
// npm --version

// local dependency => use it only in this particular project
// npm i <packageName>

// global dependency => use it in any project
// npm install -g <packageName> (for Windows)

// package.json => manifest file (stores important info about project/package)
// you can create package.json in 3 ways:
// 1. manually (create package.json in the root, create properties etc)
// 2. npm init (step by step, press enter to skip)
// 3. npm init -y (everything default) => use this

// requires like HTTP, you can directly use it in node.
// However, external dependencies like Lodash, you first need to install it.
// to install => npm i bootstrap OR npm i lodash

const _ = require('lodash');    

const items = [1, [2, [3, [4] ]]];

// flattenDeep is method in lodash, which you can directly use here since you installed lodash
const newItems = _.flattenDeep(items);
console.log(newItems);



