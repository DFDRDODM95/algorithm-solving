const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const [n, m] = [inputData[0], inputData[2]].map(v => parseInt(v));
let aMap = new Map();
const a = inputData[1].split(' ').forEach( v => aMap.set(BigInt(v), BigInt(v)) );
const q = inputData[3].split(' ').map(v => BigInt(v));

let result = ''
q.forEach( v => {
    if (aMap.has(v)) {
        result += '1' + '\n';
    }
    else {
        result += '0' + '\n';
    }
});
console.log(result);