const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const [n, m] = input.split(' ').map(v => parseInt(v));

let arr = new Array(m).fill(0);
let isUsed = new Array(n).fill(0);
let rst = '';

function solution(k) {
    if (k === m) {
        rst += arr.join(' ') + '\n';
        return;
    }
    for (let i = 1; i <= n; i++) {
        if(!isUsed[i]) {
            arr[k] = i;
            isUsed[i] = 1;
            solution(k + 1);
            isUsed[i] = 0;
        }
    }
}

solution(0);
console.log(rst);