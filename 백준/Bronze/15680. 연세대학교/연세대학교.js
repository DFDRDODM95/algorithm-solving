const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString();

const input = parseInt(inputData);
let str = "";

if (input) {
    str = "Leading the Way to the Future";
}
else {
    str = "YONSEI";
}

console.log(str);