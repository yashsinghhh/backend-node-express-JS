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


// const {readFile} = require('fs');


// const getText = (path) => {
//     return new Promise((resolve, reject)=>{
// readFile(path, 'utf8' ,(err,data) => {
//     if(err){
//         reject(err)
//     }else{
// resolve(data)   
//  }
// })
//       })
//     }

//WE CAN AVOID CODING THESE PROMISES BY USING PROMISIFY FROM UTILS
// promisify will will make the promise and we can directly run our aync function provided that we give utf8 
    

// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))

// async await is used to complete the promise first and then go about the code 

// to only response once the promise is settled

const {readFile,writeFile} = require('fs');
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise  = util.promisify(writeFile)



const start  = async () => {
    try{
    const first  = await readFilePromise('./content/first.txt','utf8')
    const second  = await readFilePromise('./content/second.txt','utf-8')
    await writeFilePromise('./content/test-for-writeFilePromise.txt',
     `htis is the .txt file using the write file function: ${first} ${second}`
     )
    console.log(first)
    console.log(second)

}
catch (error) {
console.log(error)
}
}
start()


/* Here is the explanation for the code above:
1. We declared a function called start and we made it async.
2. Inside the function we declared a const called first and we made it equal to the await function getText with the path of the file we want to read. This function is going to return a promise so we have to use await to wait for the promise to be resolved.
3. We have the catch block in case there is an error.
4. We call the start function. */




// const getText = (path) => {
//     return new Promise((resolve, reject)=>{
// readFile(path, 'utf8' ,(err,data) => {
//     if(err){
//         reject(err)
//     }else{
// resolve(data)   
//  }
// })
//       })
//     }