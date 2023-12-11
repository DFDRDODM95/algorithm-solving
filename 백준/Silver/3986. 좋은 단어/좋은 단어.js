const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
const tc = inputData.slice(1, n + 1).map(str => str.split(''));

let answer = 0;
function solution(orj) {
    if (orj.length % 2 === 1) return 0;
    let arr = [];
    for (let i = 0; i < orj.length; i++) {
        if (i === 0) {
            arr.push(orj[i]);
        }
        else {
            if (orj[i] === arr[arr.length - 1]) arr.pop();
            else arr.push(orj[i]);
        }
    }
    if (arr.length === 0) answer++;
}

tc.forEach(v => solution(v));
console.log(answer);