const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
const tc = inputData[1].split(' ').slice(0, n).map(v => parseInt(v));

let orj = new Array(n).fill(0);
for (let [key, value] of tc.entries()) {
    orj[n - key - 1] = value;
}

let stk = [];
let rst = '';
for (let i = 1; i <= n; i++) {
    if (orj.at(-1) === i) {
        rst += orj.pop();
    }
    else if (stk.at(-1) === i) {
        rst += stk.pop();
    }
    else {
        while (orj.at(-1) !== i && orj.length > 0) {
            stk.push(orj.pop());
        }
        if (orj.length > 0) rst += orj.pop();
        else {
            rst = "Sad";
            break;
        }
    }
}
let correct = new Array(n).fill(1).map( (v, idx) => v + idx, 0).join('');
rst = rst === correct ? "Nice" : "Sad";

console.log(rst);