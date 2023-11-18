const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData.slice(1, amount + 1);

let map1 = new Map();
let count = 0;
for (let item of tc) {
    if (item === "ENTER") {
        map1.clear();
    }
    else if (!map1.has(item)) {
        map1.set(item, 1);
        count++;
    }
}

console.log(count);