const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = parseInt(input);

for (let i = 1; i < inputData; i++) {
    console.log(' '.repeat(inputData - i) + "*".repeat(2 * (i - 1) + 1));
}

console.log( '*'.repeat(2 * inputData - 1) );

for (let i = inputData - 1; i > 0; i--) {
    console.log(' '.repeat(inputData - i) + "*".repeat(2 * (i - 1) + 1));
}