const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const n = parseInt(input);

let arr = new Array(n * 2).fill(' ');
let result = '';
for (let i = 0; i < n; i++) {
    arr[i] = '*';
    arr[n * 2 - 1 - i] = '*';
    result += arr.join('') + '\n';
}
for (let i = n - 1; i > 0; i--) {
    arr[i] = ' ';
    arr[n * 2 - 1 - i] = ' ';
    result += arr.join('') + '\n';
}

console.log(result);