const names  = require('./module-names.js');


const sayHi = (name) => {
    console.log(`hello there ${name}`);
}
sayHi(names.john);


const data = require('./module-alt-syntax.js');
console.log(data);


