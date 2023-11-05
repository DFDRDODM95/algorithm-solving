const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(str => str.split(' ').map(item => parseInt(item)) );

const n = inputData[0][0];
const a = inputData.slice(1, n + 1);
const b = inputData.slice(n + 1);

let answer = 0; 
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        let sum = 0;
        for (let k = 0; k < n; k++) {
            sum += a[i][k] * b[k][j];
        }
        answer += sum > 0 ? 1 : 0;
    }
}

console.log(answer);