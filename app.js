const { readFile , writeFile } = require('fs');
readFile('./content/first.txt','utf8',(err,result) => {
    // here we have provided a call back function that means it will first check for error 