const john = "john";
const peter = "peter";

// console.log(module);
// when we run this in the terminal, we get the following output:
// Module {
//     id: '.', // this is the current module             
//     path: 'C:\\Users\\josep\\Desktop\\node-tutorial\\3-modules', // this is the path to the current module
//     exports: {}, // this is the object that is exported from this module
//     parent: null, // this is the parent module
//     filename: 'C:\\Users\\josep\\Desktop\\node-tutorial\\3-modules\\app.js', // this is the filename of the current module
//     loaded: false, // this is a boolean that tells us if the module has been loaded or not
//     children: [], // this is an array of the children modules
//     paths: [ // this is an array of the paths to the modules



// So here we can see that the exports is basically showing us what all is being exported from this module.

module.exports = {john, peter};
console.log(module);