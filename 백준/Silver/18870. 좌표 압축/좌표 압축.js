const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
const tc = inputData[1].split(' ').slice(0, n).map(v => BigInt(v));

function comp(l, r) {
    if (l < r) return -1;
    else return 1;
}

let arr = tc.slice().sort( (a, b) => comp(a, b) );

let rank = 0;
let map1 = new Map();
map1.set(arr[0], rank);
for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) rank++;
    map1.set(arr[i], rank);
}

let answer = '';
for (let item of tc) {
    answer += map1.get(item) + ' ';
}

console.log(answer);