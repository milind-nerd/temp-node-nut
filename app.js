// requires like HTTP, you can directly use it in node.
// However, external dependencies like Lodash, you first need to install it.
// to install => npm i bootstrap OR npm i lodash

const _ = require('lodash');

const items = [1, [2, [3, [4] ]]];

// flattenDeep is method in lodash, which you can directly use here since you installed lodash
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello people");



