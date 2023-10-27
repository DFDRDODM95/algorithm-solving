const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(v => parseInt(v));
const [m, n] = inputData;

let arr = new Array(n - m + 1).fill(0);
let idx = 0;
for (let i = m; i <= n; i++) {
    let isPrime = i >= 2 ? true : false;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) arr[idx++] = i;
}

let sum = arr.reduce( (acc, v) => acc += v, 0);
const answer = sum === 0 ? -1 : [sum, arr[0]].join('\n');
console.log(answer);