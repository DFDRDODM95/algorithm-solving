const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split(' ').map(v => parseInt(v));
const [n, b] = inputData;

let exp = 0;
for (let i = 0, result = 1; result <= n; i++) {
    result = b ** i;
    exp = i;
}

let rest = n;
let arr = new Array(exp).fill(0);
for (let [key, value] of arr.entries()) {
    let base = Math.pow(b, arr.length - key - 1);
    let coef = 1;
    for (let i = 1; i <= 36; i++) {
        if (base * i > rest) {
            coef = i - 1;
            arr[key] = coef;
            rest -= base * coef;
            break;
        }
    }
}

let obj = {}
for (let i = 0; i < 10; i++) {
    obj[i] = i;
}

for (let i = 10; i < 36; i++) {
    obj[i] = String.fromCharCode('A'.charCodeAt(0) + i - 10);
}

const answer = arr.reduce( (acc, v) => acc += obj[v], "");
console.log(answer);