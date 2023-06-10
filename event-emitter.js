// event driven programming == the flow of the program depends on the perticular events taking place 
// event driven programing is heavily used in node js
// example the when the event takes place the function is called 

const EventEmitter  = require('events');

const customEmitter  = new EventEmitter()
// on - listen for an event
// emit - emit an event  

customEmitter.on('response',()=>{
    console.log('data recieved')
})                                                // here the order of the events matter
customEmitter.on('response',()=>{
    console.log('data recieved 2')
})

customEmitter.emit('response')



// we can provide parameter to the function so for example
customEmitter.on('identity',(name, age)=>{
    console.log(`here are the details provided ${name} ${age}`)
})
customEmitter.emit('identity', "yash" , 19)
