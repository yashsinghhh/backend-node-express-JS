// so why is it so important to use async approach in nodejs?
// if we have a nested loop in a hhtp ,module it will not only slow down the process of the specific user
// but it will also slow down the process of other users.
// to avoid this we use async approach.

//what are promises?
// promises are a way to deal with asynchronous code in a more synchronous way.
// promises are a way to deal with callbacks.
// what is synchronous code?
// synchronous code is code that is executed line by line in the order in which it is written.
// what is asynchronous code?


const {readFile} = require('fs');


const getText = (path) => {
    return new Promise((resolve, reject)=>{
readFile(path, 'utf8' ,(err,data) => {
    if(err){
        reject(err)
    }else{
resolve(data)   
 }
})
      })
    }
    

getText('./content/first.txt')
.then((result) => console.log(result))
.catch((err) => console.log(err))