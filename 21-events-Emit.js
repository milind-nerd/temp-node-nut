//video 44

const eventEmmitter = require('events');

//create instance of eventEmmitter
const customEmmitter = new eventEmmitter();

//subscribe to event "customEmmitter" - 1
customEmmitter.on('response', () => {
    console.log("Data has been received first time");
}
);
//subscribe to event "customEmmitter" - 2
customEmmitter.on('response', (name, age) => {
    console.log("Data has been received second time, but with name " + name + ' and age ' + age);
}
);
//subscribe to event "customEmmitter" - 3
customEmmitter.on('response', () => {
    console.log("Data has been received third time");
}
);

//also pass parameter along with response
customEmmitter.emit('response', 'Milind', 50);






