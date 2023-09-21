const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const check = [...input].reduce( (acc, v) => acc *= v.charCodeAt(0) >='a'.charCodeAt(0) && v.charCodeAt(0) <= 'z'.charCodeAt(0), true);
if (input.length <= 50 && check)
console.log(input + "??!");