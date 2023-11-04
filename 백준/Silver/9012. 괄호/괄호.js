const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData.slice(1, amount + 1);

function solution (str) {
    let result = "YES";
    let stk = [str.at(0)];
    for (let item of [...str.slice(1)]) {
        if (item === '(') {
            stk.push(item);
        }
        else if (item === ')') {
            if (stk.at(-1) === '(') stk.pop();
            else {
                result = "NO";
                break;
            }
        }
    }
    if (stk.length !== 0) result = "NO";
    return result;
}

const answer = tc.map( v => solution(v) ).join('\n');
console.log(answer);