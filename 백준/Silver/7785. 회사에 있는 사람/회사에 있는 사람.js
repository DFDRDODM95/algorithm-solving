const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData.slice(1, amount + 1).map(str => str.split(' '));

const map1 = new Map();
for (let item of tc) {
    if (item[1] == "enter") {
        map1.set(item[0], item[0]);
    }
    else {
        map1.delete(item[0]);
    }
}

let result = Array.from(map1.keys()).sort().reverse().join('\n');

console.log(result);