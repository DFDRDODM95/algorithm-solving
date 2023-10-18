const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData.slice(1, amount + 1).map(str => str.split(' '));

let stk = new Array(amount + 1).fill(0);
let ptr = 0;
let strs = [];
const op = {
    "push" : (num) => {
        ptr++;
        stk[ptr] = num;
    },
    "pop" : (num) => {
        if (ptr > 0) {
            strs.push(stk[ptr]);
            ptr--;
        }
        else strs.push(-1);
    },
    "size" : (num) => {
        strs.push(ptr);
    },
    "empty" : (_) => {
        strs.push(ptr === 0 ? 1 : 0);
    },
    "top" : (num) => {
        strs.push(ptr === 0 ? -1 : stk[ptr]);
    }
};

tc.forEach(v => op[ v[0] ]( v[1] ));
console.log( strs.join('\n') );