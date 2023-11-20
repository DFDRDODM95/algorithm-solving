const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData.slice(1, amount + 1).map(str => str.split(' ').map(item => parseInt(item)) );

let rst = '';
for (let item of tc) {
    let [a, b] = item;
    let ab = a * b;
    let r = a % b;
    
    for (; r = a % b; a = b, b = r) {}
    
    rst += ab / b + '\n';
}

console.log(rst);