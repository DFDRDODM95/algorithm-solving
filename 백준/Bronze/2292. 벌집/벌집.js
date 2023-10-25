const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = BigInt(input);

let count = 1n;
let sum = 1n;
while(sum < inputData) {
    sum += 6n * count; 
    count++;
}

console.log(count.toString());