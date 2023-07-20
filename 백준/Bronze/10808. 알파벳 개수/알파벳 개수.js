let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let arr = new Array(26).fill(0);

input.split('').map(item => arr[ item.charCodeAt(0) - 'a'.charCodeAt(0) ]++ );

console.log(arr.join(' '));