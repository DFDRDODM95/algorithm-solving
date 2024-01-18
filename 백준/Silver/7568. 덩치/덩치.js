const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
const tc = inputData.slice(1).map(str => str.split(' ').map(item => parseInt(item)));

let answer = '';
for (let l of tc) {
    let count = 1;
    for (let r of tc) {
        if (l[0] < r[0] && l[1] < r[1]) count++;
    }
    answer += count + ' ';
}

console.log(answer);