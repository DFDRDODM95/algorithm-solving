const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = parseInt(input);

let arr = new Array(16).fill(2);
for (let i = 1; i < 16; i++) {
    arr[i] = arr[i - 1] + Math.pow(2, i - 1);
}

const answer = arr[inputData] ** 2;
console.log(answer);