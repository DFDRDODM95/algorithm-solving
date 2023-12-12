const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
const len = parseInt(inputData[1]);
const s = inputData[2];

const pn ='I' + "OI".repeat(n);

let count = 0;
for (let i = 0; i < len; i++) {
    let idx = s.indexOf(pn, i);
    if (idx !== -1) {
        count++;
        i = idx;
    }
    else break;
}

console.log(count);