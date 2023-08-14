const input = require('fs').readFileSync('/dev/stdin').toString();

const result = Array(+input).fill(1).map( (v, idx) => v + idx ).reduce( (acc, v) => acc + v, 0);

console.log(result);