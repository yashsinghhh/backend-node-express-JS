const {readFile} = require('fs');
console.log('start the first task');
// CHECK FILE PATH!!!!
readFile('./content/first.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first task');
}
    )
    console.log('starting next task');

    // here the readFile is asynchronous and the console.log('starting next task') will be executed first and then the readFile will be executed.
    // so to avoid this we use callbacks.
    // callbacks are functions that are passed in as an argument to another function and then executed inside the function.
    // so here we pass the callback function as an argument to the readFile function and then execute it inside the readFile function.
    // so the callback function will be executed only after the readFile function is executed.
    // so the console.log('starting next task') will be executed only after the readFile function is executed.
