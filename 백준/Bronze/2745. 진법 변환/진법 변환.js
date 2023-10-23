const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split(' ');
const [n, b] = [inputData[0], parseInt(inputData[1])];

const obj = {};
let start = 10;
for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
    obj[String.fromCharCode(i)] = start++;
}
for (let i = 0; i <= 9; i++) {
    obj[i] = i;
}

const len = n.length;
const answer = [...n].reduce( (acc, v, idx) => {
    acc += obj[v] * Math.pow(b, len - 1 - idx);
    return acc;
}, 0);
console.log(answer);