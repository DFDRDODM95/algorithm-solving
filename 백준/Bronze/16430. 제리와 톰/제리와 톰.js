const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

let result = A / B == Math.floor( A / B ) ? B - A / B : `${B - A} ${B}`
console.log(result);