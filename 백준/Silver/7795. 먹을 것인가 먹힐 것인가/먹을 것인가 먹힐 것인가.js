const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');

const amount = parseInt(inputData[0]);
let rest = inputData.slice(1);
let tests = new Array(amount).fill(0);
for (let i = 0, j = 0; i < amount; i++, j += 3) {
    tests[i] = rest.slice(j, j + 3);
}

function solution(arr) {
    const [n, m] = arr[0].split(' ').map(v => parseInt(v));
    const b = arr[2].split(' ').map(v => parseInt(v)).sort( (a, b) => a - b );
    const min = b[0];
    const a = arr[1].split(' ').map(v => parseInt(v)).filter( v => v > min );

    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (a[i] > b[j]) count++;
        }
    }
    console.log(count);
}

tests.forEach( v => solution(v) );