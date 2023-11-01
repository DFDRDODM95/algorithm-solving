const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData.slice(1, amount + 1).map(str => str.split(' ').map(item => parseInt(item)) );

function comp(l, r) {
    if (l[0] < r[0]) {
        return -1;
    }
    else if (l[0] > r[0]) {
        return 1;
    }
    else {
        if (l[1] < r[1]){
            return -1;
        }
    }
    return 1;
}

const answer = tc.sort( (a, b) => comp(a, b) ).map(v => v.join(' '));
console.log(answer.join('\n'));