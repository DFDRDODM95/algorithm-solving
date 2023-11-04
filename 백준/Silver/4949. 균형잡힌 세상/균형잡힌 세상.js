const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const tc = input.split('\n').slice(0, -1);

function solution (str) {
    let result = "yes";
    let stk = [];
    for (let item of [...str]) {
        if (item === '(' || item === '[') {
            stk.push(item);
        }
        else if (item === ')') {
            if (stk.at(-1) === '(') stk.pop();
            else {
                result = "no";
                break;
            }
        }
        else if (item === ']') {
            if (stk.at(-1) === '[') stk.pop();
            else {
                result = "no";
                break;
            }
        }
    }
    if (stk.length !== 0) result = "no";
    return result;
}

const answer = tc.map( v => solution(v) ).join('\n');
console.log(answer);