const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split(' ');
const [n, k] = input.map(v => parseInt(v));

const numer = getFactorial(n);
const denom = getFactorial(k) * getFactorial(n - k);

const answer = numer / denom;
console.log(answer);

function getFactorial(num) {
    return new Array(num).fill(1).map( (v, idx) => v + idx ).slice().reduce( (acc, v) => acc *= v, 1 );
}