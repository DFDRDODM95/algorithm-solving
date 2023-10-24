const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = parseInt(input) + 1;

let arr = new Array(inputData).fill(0);
arr[0] = 0;
arr[1] = 1;

for (let i = 2; i < inputData; i++) {
    arr[i] = arr[i-1] + arr[i - 2];
}

console.log(arr.at(inputData - 1));