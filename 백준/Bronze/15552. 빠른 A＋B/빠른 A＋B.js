let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map( v => v.split(' '));

const amount = parseInt(input[0]);
input = input.splice(1, amount);

const result = input.reduce( (acc, v) => acc += parseInt(v[0]) + parseInt(v[1]) + '\n', "").slice(0, -1);

console.log(result);