const fs = require('fs');
const input = fs.readFileSync(0, 'utf8');
const inputData = parseInt(input);

let arr = new Array(inputData).fill('*');

let result = '*'.repeat(inputData) + '\n';
for (let i = 0; i < inputData - 1; i++) {
    arr[i] = ' ';
    result += arr.join('') + '\n';
}

console.log(result.trim());