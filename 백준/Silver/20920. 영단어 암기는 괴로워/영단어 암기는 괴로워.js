const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData =  input.split('\n');
const [n, m] = input.split(' ').map(v => parseInt(v));
const tc = inputData.slice(1, n + 1).filter(v => v.length >= m);

let obj = {};
for (let item of tc) {
    if (!obj[item]) obj[item] = 1;
    else obj[item]++;
}

let arr = Object.entries(obj);
function comp(l, r) {
    if (l[1] > r[1]) return -1;
    else if (l[1] < r[1]) return 1;
    else if (l[0].length > r[0].length) return -1;
    else if (l[0].length < r[0].length) return 1;
    return l[0].localeCompare(r[0]);
}

const answer = arr.sort( (a, b) => comp(a, b) ).map(v => v[0]).join('\n');
console.log(answer);