const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');

let max = 1;
for (let item of inputData) {
    max = item.length > max ? item.length : max;
}
let arr = new Array(inputData.length).fill(0).map(v => new Array(max).fill(''));

for (let [key, value] of arr.entries()) {
    for (let i = 0; i < inputData[key].length; i++) {
        arr[key][i] = inputData[key][i];
    }
}

let result = '';
for (let i = 0; i < max; i++) {
    for (let j = 0; j < arr.length; j++) {
        result += arr[j][i];
    }
}

console.log(result);