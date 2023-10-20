const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const amount = parseInt( input.split('\n').at(0) );
const inputData = input.split('\n').slice(1, amount + 1);


function check(word) {
    let result = true;
    let stk = [word.at(0)];
    for (let item of [...word].slice(1)) {
        if (stk.includes(item)) {
            if (item === stk.at(-1)) {
                stk.push(item);
            }
            else {
                result = false;
                break;
            }
        }
        else {
            stk.push(item);
        }
    }
    return result;
}

const answer = inputData.reduce( (acc, v) => check(v) ? acc += 1 : acc, 0);
console.log(answer);