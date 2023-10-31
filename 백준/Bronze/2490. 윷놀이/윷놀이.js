const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(str => str.split(' '));

function solution(arr) {
    let count = 0;
    for (let item of arr) {
        if (item === '0') count++;
    }
    let obj = {
        '1' : 'A',
        '2' : 'B',
        '3' : 'C',
        '4' : 'D',
        '0' : 'E'
    };
    console.log(obj[count]);
}

inputData.forEach( v => solution(v) );