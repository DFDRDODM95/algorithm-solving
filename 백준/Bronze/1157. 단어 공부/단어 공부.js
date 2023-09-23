const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().toUpperCase();
const inputData = input.split('');

let charCount = {};
for (let item of inputData) {
    if(!charCount[item]) {
        charCount[item] = 1;
    }
    else {
        charCount[item]++;
    }
}

const countArr = Object.entries(charCount).sort( (a, b) => b[1] - a[1] );

let result = countArr[0][0];
if (countArr.length >= 2)
if (countArr[0][1] === countArr[1][1]) result = '?';

console.log(result);