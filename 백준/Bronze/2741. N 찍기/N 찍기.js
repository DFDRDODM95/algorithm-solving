const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const A = parseInt(inputData[0]);

let str = "";
for (let i = 1; i <= A; i++){
    str += i + '\n';
}
str = str.slice(0, str.length - 1);
console.log(str);