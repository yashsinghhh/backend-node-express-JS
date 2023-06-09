setInterval(() =>{
    console.log("Hello world");
},5000)
console.log("I will run first");

// here the setInterval function is asynchronous and the
// console.log("I will run first") will be executed first and then the setInterval function will be executed.
// it will be in an infinite loop and will print hello world every 5 seconds.