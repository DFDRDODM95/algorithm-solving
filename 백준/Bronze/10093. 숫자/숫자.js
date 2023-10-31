const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split(' ').map(v => BigInt(v));
const [s, e] = inputData[0] < inputData[1] ? inputData : inputData.reverse();

let result = "";
for (let i = s + 1n; i < e; i++) {
    result += i.toString() + ' ';
}
result = result.trim();

let size = e - s - 1n;
size = size > 0n ? size : 0n;

console.log(size.toString());
if (size !== 0n) console.log(result);