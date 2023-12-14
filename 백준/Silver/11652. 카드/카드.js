const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData.slice(1, amount + 1).map(v => BigInt(v));

let obj = {};
for (let item of tc) {
    if (!obj[item]) {
        obj[item] = 1;
    }
    else {
        obj[item]++;
    }
}

function comp(a, b) {
    if (a[1] > b[1]) return -1;
    else if (a[1] === b[1]) {
        if (BigInt(a[0]) < BigInt(b[0])) return -1;
    }
    return 1;
}

const answer = Object.entries(obj).sort( (a, b) => comp(a, b) );
console.log(answer.at(0)[0]);