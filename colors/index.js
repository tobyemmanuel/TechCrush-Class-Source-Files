const path = require('path'); //local module
const colors = require('colors'); // thirdparty
const greetings = require('./my_module/greetings') //custom module

let file_name = path.basename(__filename);
file_name  = colors.red(file_name);
console.log(file_name);

let personName = "Tobi";

let greetHello = greetings.sayHello(personName)
greetHello = colors.rainbow(greetHello);
console.log(greetHello)