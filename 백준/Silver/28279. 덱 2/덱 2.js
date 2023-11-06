const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n =  parseInt(inputData[0]);
const tc = inputData.slice(1, n + 1).map(str => str.split(' ').map(item => parseInt(item)) );

let deq = new Array(n * 2).fill(0);
let [head, tail] = [n , n];
let rst = '';
const op = {
    1 : (x) => { deq[--head] = x; },
    2 : (x) => { deq[tail++] = x; },
    3 : () => { if (tail - head === 0 ) rst += -1 + '\n'; 
    else { rst += deq[head]; rst += '\n'; head++;} },
    4 : () => { if (tail - head === 0 ) rst += -1 + '\n';
    else { rst += deq[tail - 1]; rst += '\n'; tail--; }},
    5 : () => { rst += tail - head + '\n'},
    6 : () => { rst += tail - head === 0 ? 1 : 0; rst += '\n'},
    7 : () => { rst += tail - head === 0 ? -1 : deq[head]; rst += '\n'},
    8 : () => { rst += tail - head === 0 ? -1 : deq[tail - 1]; rst += '\n'}
}

tc.forEach(v => v.length === 0 ? op[v[0]] : op[v[0]](v[1]));
console.log(rst);