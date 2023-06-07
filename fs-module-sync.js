// file system 
// we can interact witht the file system using the fs module
// sync which is non blocking and async which is blocking

const {readFileSync} = require('fs');
const {writeFileSync} = require('fs');


const first = readFileSync('./content/first.txt','utf8');
console.log(first);
// defualt is utf8

const second = readFileSync('./content/second.txt','utf8');
console.log(second);

console.log(first,second);


writeFileSync(
    './content/result-sync.txt',
    'Here is the result : here you can write whatever text you want to add to the new .txt file',
    )
    // write file sync function will make a new file or override a existing file 
// you dont even have to run the prgram it automatically makes the file
