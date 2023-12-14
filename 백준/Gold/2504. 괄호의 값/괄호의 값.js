const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();

let stk = [];
let total = 0;
for (let item of [...input]) {
    if (item === '(' || item === '[') {
        stk.push([item, 0]);
    }
    else if (item === ')') {
        if (stk.length === 0 || stk.at(-1)[0] !== '(') {
            total = 0;
            break;
        }
        else if(stk.at(-1)[0] === '(') {
            let temp = stk.pop();
            if (stk.length === 0) {
                if (temp[1] === 0) total += 2;
                else total += temp[1] * 2;
            }
            else if (temp[1] === 0) stk.at(-1)[1] += 2;
            else stk.at(-1)[1] += temp[1] * 2;
        }
    }
    else if (item === ']') {
        if (stk.length === 0 || stk.at(-1)[0] !== '[') {
            total = 0;
            break;
        }
        if (stk.at(-1)[0] === '[') {
            let temp = stk.pop();
            if (stk.length === 0) {
                if (temp[1] === 0) total += 3;
                else total += temp[1] * 3;
            }
            else if (temp[1] === 0) stk.at(-1)[1] += 3;
            else stk.at(-1)[1] += temp[1] * 3;
        }
    }
}

if (stk.length !== 0) total = 0;
console.log(total);