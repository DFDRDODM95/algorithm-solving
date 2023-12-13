const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
const tc = inputData.slice(1, n + 1).map(str => str.split(' '));

const map1 = new Map();
for (let item of tc.flat()) {
    if (!map1.has(item)) map1.set(item, 0);
}
map1.set("ChongChong", 1);

for (let item of tc) {
    if (item.some(v => map1.get(v) === 1)) item.forEach(v => map1.set(v, 1));
}

const answer = Array.from(map1, ([_, value]) => value ).filter(v => v === 1).length;
console.log(answer);