let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let result = Array(+input).fill("SciComLove").join('\n');

console.log(result);