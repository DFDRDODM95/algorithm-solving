const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData.slice(1, amount + 1).map(v => v.split(' '));

let stk = [];
let rst = '';
const op = {
    1 : (x) => {stk.push(x);},
    2 : (x) => {rst += stk.length !== 0 ? stk.pop() : -1;
        rst += '\n';},
    3 : (x) => {rst += stk.length;
        rst += '\n';},
    4 : (x) => {rst += stk.length === 0 ? 1 : 0;
        rst += '\n';},
    5 : (x) => {rst += stk.length !== 0 ? stk.at(-1) : -1;
        rst += '\n';}
};
tc.forEach( v => {
    if (v.length > 1) {
        op[v[0]](v[1]);
    }
    else {
        op[v](0);
    }
});

console.log(rst);