const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(str => str.split(' ').map(item => parseInt(item)));
const [n, m] = inputData[0];
const arr = inputData[1].slice(0, n);
const tc = inputData.slice(2, m + 2);

let sum = new Array(n).fill(arr[0]);
for (let i = 1; i < n; i++) sum[i] = sum[i - 1] + arr[i];

let rst = [];
for (let item of tc) {
    let [s, e] = item.map(v => v - 1);
    if (s === 0) rst.push(sum[e]);
    else rst.push(sum[e] - sum[s - 1]);
}

console.log(rst.join('\n'));