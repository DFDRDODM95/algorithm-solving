const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = parseInt(input);

let arr = new Array(inputData).fill(' ');
arr[inputData - 1] = '*';

let result = arr.join('') + '\n';
for (let i = 1; i < inputData; i++) {
    arr[ inputData -1 - i ] = '*';
    result += arr.join('') + '*'.repeat(i) + '\n';
}
console.log(result);