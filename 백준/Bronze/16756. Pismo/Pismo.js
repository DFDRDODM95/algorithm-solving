const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const dataList = inputData[1].split(' ').slice(0, amount).map(v => BigInt(v));

let intervals = new Array(amount - 1).fill(-1);
for (let i = 0; i < amount - 1; i++) {
    intervals[i] = dataList[i + 1] - dataList[i];
    if (intervals[i] < 0n) intervals[i] *= -1n;
}

let min = intervals[0];
for (let item of intervals) {
    if (item < min) min = item;
}

console.log(min.toString());