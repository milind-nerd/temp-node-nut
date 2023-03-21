//video 43

const eventEmmitter = require('events');

//create instance of eventEmmitter
const customEmmitter = new eventEmmitter();

//subscribe to event "customEmmitter"
customEmmitter.on('response', () => {
    console.log("Data has been received.");
}
);

customEmmitter.emit('response');






