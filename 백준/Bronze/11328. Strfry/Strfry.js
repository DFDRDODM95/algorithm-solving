const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData.slice(1, amount + 1).map(str => str.split(' '));

function solution(arr) {
    let str1 = [...arr[0]].sort().join('');
    let str2 = [...arr[1]].sort().join('');
    
    return str1 === str2 ? "Possible" : "Impossible";
}

console.log( tc.slice('').map(v => solution(v)).join('\n') );