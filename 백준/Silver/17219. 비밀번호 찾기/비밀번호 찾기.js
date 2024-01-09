const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const [n, m] = inputData[0].split(' ').map(v => parseInt(v));

let map1 = new Map();
for (let i = 0; i < n; i++) {
    let [site, pw] = inputData[1 + i].split(' ');
    map1.set(site, pw);
}

const tc = inputData.slice(1 + n, 1 + n + m);
const answer = tc.reduce( (acc, v) => acc += map1.get(v) + '\n', '');
console.log(answer);