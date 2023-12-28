const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(str => str.split(' ').map(item => parseInt(item)));
const [n, m] = inputData[0];
const tc = inputData[1].sort( (a, b) => a - b );

let arr = new Array(m).fill(0);
let set1 = new Set();
function func1(k, a) {
    if (k === m) {
        set1.add(arr.join(' '));
        return;
    }
    for (let i = a; i < n; i++) {
        arr[k] = tc[i];
        func1(k + 1, i + 1);
    }
}
func1(0, 0);

const answer = Array.from(set1).join('\n');
console.log(answer);