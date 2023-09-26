const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();

const inputData = input.split('');

let temp = 'E';
let opt = "";
for(let item of inputData) {
    if (temp != item) {
        temp = item;
        opt += item;
    }
}

opt = opt.split('');
let [cnt0, cnt1] = [0, 0];
for (let item of opt) {
    if (item === '0') {
        cnt0++;
    }
    else if (item === '1') {
        cnt1++;
    }
}

answer = Math.min(cnt0, cnt1);
console.log(answer);