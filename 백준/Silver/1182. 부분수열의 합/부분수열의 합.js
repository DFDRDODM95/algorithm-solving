const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(v => v.split(' '));
const n = parseInt(inputData[0][0]);
const s = BigInt(inputData[0][1]);
const tc = inputData[1].slice(0, n).map(v => BigInt(v));

let cnt = 0;
function solution(k, a) {
    if (k === n) {
        if (s === a) cnt++;
        return;
    }
    solution(k + 1, a);
    solution(k + 1, a + tc[k]);
}

solution(0, 0n);
if (s === 0n) cnt--;

console.log(cnt);