const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const [n, m] = input.split(' ').map(v => parseInt(v));

let arr = new Array(m).fill(0);
let rst = '';
function solution(k, a) {
    if (k === m) {
        rst += arr.join(' ') + '\n';
        return;
    }
    for (let i = a; i <= n; i++) {
        arr[k] = i;
        solution(k + 1, i);
    }
}

solution(0, 1);
console.log(rst);