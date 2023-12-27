const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(v => parseInt(v));
const t = inputData[0];
const tc = inputData.slice(1, t + 1);

let max = 0;
for (let item of tc) max = item > max ? item : max;

let arr = new Array(max + 1).fill(0);
arr[0] = [1, 0];
arr[1] = [0, 1];

for (let i = 2; i <= max; i++) {
    let cnt0 = arr[i - 1][0] + arr[i - 2][0];
    let cnt1 = arr[i - 1][1] + arr[i - 2][1];
    arr[i] = [cnt0, cnt1];
}

let rst = new Array(t).fill(0);
for (let i = 0; i < t; i++) {
    rst[i] = arr[tc[i]].join(' ');
}

const answer = rst.join('\n');
console.log(answer);