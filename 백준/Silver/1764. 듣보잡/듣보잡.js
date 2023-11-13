const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const [n, m] = inputData[0].split(' ').map(v => parseInt(v)).sort( (a, b) => b - a );
const arr1 = inputData.slice(1, n + 1);
const arr2 = inputData.slice(n + 1, n + m + 1).sort();

const map1 = new Map();
for (let item of arr1) {
    map1.set(item, item);
}

let rst = '';
let count = 0;
for (let item of arr2) {
    if (map1.has(item)) {
        count++;
        rst += map1.get(item) + '\n';
    }
}
rst = count + '\n' + rst;

console.log(rst);