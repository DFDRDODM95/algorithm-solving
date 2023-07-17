const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
let result = 280;

if (A >=12 && A <= 16) {
    if (B == 0) {
        result = 320;
    }
}

console.log(result);