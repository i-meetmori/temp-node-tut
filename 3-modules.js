// CommonJS, every file is module (by default)
// Modules

const names = require('./4-name');
const utils = require('./5-utils');
console.log(names) 
utils.sayHi(names.name1)

// utils.sayHi(names.name.name1);
