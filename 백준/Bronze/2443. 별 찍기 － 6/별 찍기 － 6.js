const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = parseInt(input);

let result = '';
for (let i = 0; i < inputData; i++) {
    result += ' '.repeat(i) + '*'.repeat(2 * inputData - (2 * i + 1)) + '\n';
}

console.log(result);