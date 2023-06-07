const path = require('path');
console.log(path.sep);
// gives seperator for my current os (windows = \)
console.log(path.join('/content','subfolder','test.txt'));
// this is an example 
const base = path.basename('/content/subfolder/test.txt');
console.log(base);