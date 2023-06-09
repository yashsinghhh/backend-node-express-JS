console.log('first')
setTimeout(()=>{
    console.log('second')
},0)
console.log('third')
// here the setTimeout function is asynchronous and the
// console.log('third') will be executed first and then the setTimeout function will be executed.