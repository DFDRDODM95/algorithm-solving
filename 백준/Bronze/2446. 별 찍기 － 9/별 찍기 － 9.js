const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const n = parseInt(input);

let result = '';
for (let i = 0; i < n - 1; i++) {
    result += ' '.repeat(i) + '*'.repeat(n * 2 - 2 * i - 1) + '\n';
}
for (let i = n - 1; i >= 0; i--) {
    result += ' '.repeat(i) + '*'.repeat(n * 2 - 2 * i - 1) + '\n';
}

console.log(result);