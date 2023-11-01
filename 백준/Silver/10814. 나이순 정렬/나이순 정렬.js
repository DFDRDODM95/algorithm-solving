const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData.slice(1, amount + 1).map( (str, idx) => [...str.split(' ').map( (item, itemIdx) => itemIdx === 0 ? parseInt(item) : item), idx]);

const answer= tc.sort( (a, b) => comp(a, b) ).map( v => [v[0], v[1]].join(' '));
console.log(answer.join('\n'));

function comp(l, r) {
    if (l[0] < r[0]) {
        return -1;
    }
    else if (1[0] > r[0]) {
        return 1;
    }
    else {
        if (l[2] < r[2]) return -1;
    }
    return 1;
}