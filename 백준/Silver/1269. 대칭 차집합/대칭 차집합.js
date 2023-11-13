const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(str => str.split(' ').map(item => parseInt(item)) );
const [n, m] = inputData[0];
const a = inputData[1];
const b = inputData[2];

const map1 = new Map();
for (let item of a) {
    map1.set(item, item);
}

for (let item of b) {
    if(map1.has(item)) {
        map1.delete(item);
    }
    else { map1.set(item, item); }
}

const answer = map1.size;
console.log(answer);