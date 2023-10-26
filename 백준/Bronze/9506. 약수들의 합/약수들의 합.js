const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').slice(0, -1).map(v => parseInt(v));

function solution(num) {
    let arr = new Array(num).fill(0);
    let idx = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) arr[idx++] = i;
    }
    arr = arr.slice(0, idx);
    const sum = arr.reduce( (acc, v) => acc += v, 0);
    if (num === sum) {
        return num + " = " + arr.join(' + ');
    }
    else {
        return num + " is NOT perfect.";
    }
}

const answer = inputData.map(v => solution(v)).join('\n');
console.log(answer);