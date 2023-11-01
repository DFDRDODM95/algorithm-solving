const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData.slice(1, amount + 1);

const answer = tc.sort( (a, b) => comp(a, b) );
console.log(answer.join('\n'));

function comp(l, r) {
    if (l.length < r.length) {
        return  -1;
    }
    else if (l.length === r.length) {
        const lSum = [...l].reduce( (acc, v) => isDigit(v) ? acc += parseInt(v) : acc, 0);
        const rSum = [...r].reduce( (acc, v) => isDigit(v) ? acc += parseInt(v) : acc, 0);
        if (lSum < rSum) {
            return -1;
        }
        else if (lSum > rSum) {
            return 1;
        }
        else {
            if ([l, r].sort().at(0) === l) {
                return -1;
            }
        }
    }
    return 1;
}

function isDigit(word) {
    const charCode = word.charCodeAt(0);
    return charCode >= '0'.charCodeAt(0) && charCode <= '9'.charCodeAt(0);
}