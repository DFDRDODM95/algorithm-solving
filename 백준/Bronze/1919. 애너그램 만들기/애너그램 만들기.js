const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const [a, b] = input.split('\n');

let arr1 = new Array(26).fill(0);
for (let item of [...a]) {
    let alpha = item.charCodeAt(0) - 'a'.charCodeAt(0);
    arr1[alpha]++;
}

let arr2 = new Array(26).fill(0);
for (let item of [...b]) {
    let alpha = item.charCodeAt(0) - 'a'.charCodeAt(0);
    arr2[alpha]++;
}

let inter = new Array(26).fill(-1);
for (let i = 0; i < 26; i++) {
    inter[i] = Math.min(arr1[i], arr2[i]);
}

const interSum = inter.reduce( (acc, v) => acc += v, 0);
const answer = a.length - interSum + b.length - interSum;
console.log(answer);