const fs = require('fs');
const input = fs.readFileSync(0, 'utf8');
const inputData = parseInt(input);

let result = ``;
for (let i = inputData; i >= 1; i--) {
    result += '*'.repeat(i) + '\n';
}

console.log(result.trim());