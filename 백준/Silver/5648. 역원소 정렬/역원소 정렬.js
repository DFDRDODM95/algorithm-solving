const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0].split(' ').at(0));
const tc = inputData[0].split(' ').slice(1).concat(inputData.slice(1, n + 1)).map(str => str.split(' ')).flat();

function comp(l, r) {
    if (l < r) return -1;
    else return 1;
}

let altc = [];
for (let item of tc) {
    if (item.length === 0) continue;
    altc.push( BigInt( [...item].reverse().join('') ) );
}
const answer = altc.sort( (a, b) => comp(a, b) ).join('\n');

console.log(answer);