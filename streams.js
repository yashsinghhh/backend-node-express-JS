// streams are basically used to read or write sequentially 
// Writeable
//readable
//duplex - both read and write seq
//transform - can modify while reading and writng 

// EXTENDS EMITTER CLASS

const {createReadStream} = require('fs');
const stream  = createReadStream('./content/big.txt');
stream.on('data',(result)=>{
console.log(result)
})
