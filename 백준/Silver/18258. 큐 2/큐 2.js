const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData.slice(1, amount + 1).map(str => str.split(' '));

let arr = new Array(amount).fill(0);
let [fr, re] = [0, -1];
let rst = '';
const op = {
    push : (x) => { re++; arr[re] = x;},
    pop : (x) => { if (re - fr + 1 === 0) {
        rst += -1 + '\n';
    } else {
        rst += arr[fr] + '\n';
        fr++;
    } },
    size : (x) => {rst += re - fr + 1 + '\n';},
    empty : (x) => {rst += re - fr + 1 === 0 ? 1 : 0; rst += '\n'},
    front : (x) => {rst += re - fr + 1 === 0 ? -1 : arr[fr]; rst += '\n'},
    back : (x) => {rst += re - fr + 1 === 0 ? -1 : arr[re]; rst += '\n'}
}

tc.forEach(v => v.length === 1 ? op[v[0]](0) : op[v[0]](v[1]));
console.log(rst);