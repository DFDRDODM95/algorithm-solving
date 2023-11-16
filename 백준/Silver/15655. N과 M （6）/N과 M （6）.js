const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(str => str.split(' ').map(item => parseInt(item)) );
const [n, m] = inputData[0];
const tc = inputData[1].sort( (a, b) => a - b );

let arr = new Array(m).fill(0);
let rst = '';
function solution(k, a) {
    if (k === m) {
        rst += arr.join(' ') + '\n';
        return;
    }
    for (let i = a; i <= n; i++) {
        arr[k] = tc[i - 1];
        solution(k + 1, i + 1);
    }
}

solution(0, 1);
console.log(rst);