const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(v => parseInt(v));

let oddSum = 0;
let oddMin = 99;
for (let item of inputData) {
    if (item % 2 === 1) {
        oddSum += item;
        oddMin = item < oddMin ? item : oddMin;
    }
}

if (oddSum === 0) {
    console.log(-1);
}
else {
    console.log(oddSum);
    console.log(oddMin);
}