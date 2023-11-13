const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
const arr = inputData[1].split(' ').map(v => BigInt(v));
const m = parseInt(inputData[2]);
const tc = inputData[3].split(' ').map(v => BigInt(v));

let obj = {};
for (let item of arr) {
    if(!obj[item]) {
        obj[item] = 1;
    }
    else {
        obj[item]++;
    }
}

let map1 = new Map();
for (let [key, value] of Object.entries(obj)) {
    map1.set(key, value);
}

let rst = '';
for (let item of tc) {
    rst += map1.has(item.toString()) ? map1.get(item.toString()) : '0';
    rst += ' ';
}

console.log(rst);