// file system
// Non-blocking and Blocking are 2 different methods

const {readFileSync, writeFileSync} = require('fs');

// Reading file
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first, second)

writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`,{flag : 'a'})

