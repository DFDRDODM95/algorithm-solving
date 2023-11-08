const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const [n, m] = inputData[0].split(' ').map(v => parseInt(v));
const tc = inputData[1].split(' ').slice(0, n).map(v => parseInt(v));

let arr = [];
for (let i = 0; i < n - 2; i++) {
    let sum = 0;
    for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
            sum = tc[i] + tc[j] + tc[k];
            arr.push(sum);
        }
    }
}

const answer = arr.filter(v => v <= m).sort( (a, b) => b - a ).at(0);
console.log(answer);