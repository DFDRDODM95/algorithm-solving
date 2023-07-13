const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const A = parseInt(inputData[0]);

let result = 0;

if (A % 4 == 0) {
    result = 1;
}
if (A % 400 == 0) {
    result = 1;
}
else if (A % 100 == 0) {
    result = 0;
}

console.log(result);