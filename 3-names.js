//local 
const secretMessage = "Secret1234";

//share
const johnAge = 32;
const milindAge = 30;

//since you dont have secretMessage exported here, it will not be available in parent file, where "require" is used
module.exports = {johnAge, milindAge};


