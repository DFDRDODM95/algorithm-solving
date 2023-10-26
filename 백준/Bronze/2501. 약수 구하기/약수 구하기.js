const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split(' ').map(v => parseInt(v));
const [n, k] = inputData;

let arr = new Array(n).fill(0);
let idx = 0;
for (let i = 1; i <= n; i++) {
    if(n % i === 0) arr[idx++] = i;
    if (idx === k) break;
}
const answer = arr.at(k - 1);

console.log(answer);