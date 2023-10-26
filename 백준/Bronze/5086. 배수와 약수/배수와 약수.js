const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').slice(0, -1).map(str => str.split(' ').map(item => parseInt(item)) );

function solution(arr) {
    let result = '';
    if (arr[1] % arr[0] === 0) {
        result = "factor";
    }
    else if (arr[0] % arr[1] === 0) {
        result = "multiple";
    }
    else {
        result = "neither";
    }
    return result;
}

const answer = inputData.map(v => solution(v)).join('\n');
console.log(answer);