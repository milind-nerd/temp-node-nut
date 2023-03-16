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

