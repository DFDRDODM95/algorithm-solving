const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

let result = -1;
if ( A > 0 && B > 0 ) {
    result = 1;
}
else if ( A < 0 && B > 0 ) {
    result = 2;
}
else if ( A < 0 && B < 0 ) {
    result = 3;
}
else if ( A > 0 && B < 0 ) {
    result = 4;
}

console.log(result);