const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map( str => str.split(' ').map(item => parseInt(item) ) );
const [n, m] = inputData[0];

let arr = new Array(2).fill(0);
arr[0] = inputData.slice(1, 1 + n);
arr[1] = inputData.slice(n + 1);

let sum = [];
for (let i = 0; i < n; i++) {
    sum.push(new Array(m).fill(0));
} 

for (let [key, value] of sum.entries()) {
    for (let i = 0; i < m; i++) {
        sum[key][i] = arr[0][key][i] + arr[1][key][i];
    }
}

console.log(sum.map( v => v.join(' ') ).join('\n'));