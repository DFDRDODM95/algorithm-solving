const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const [n, m] = input.slice(0, 2).map( v => parseInt(v));
const inputData = input[2].split(' ').slice(0, n).map( v => parseInt(v) );

let stk = inputData.slice();

let count = 0;
while (stk.length > 1) {
  const picked = stk.pop();
  for(let item of stk) {
    if (item + picked === m) count++;
  }
}

console.log(count);