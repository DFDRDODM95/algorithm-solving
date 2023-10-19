const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();

const arr = [...input];

function solution(letter) {
    let num = NaN;
    if ("ABC".includes(letter)) num = 3;
    else if ("DEF".includes(letter)) num = 4;
    else if ("GHI".includes(letter)) num = 5;
    else if ("JKL".includes(letter)) num = 6;
    else if ("MNO".includes(letter)) num = 7;
    else if ("PQRS".includes(letter)) num = 8;
    else if ("TUV".includes(letter)) num = 9;
    else if ("WXYZ".includes(letter)) num = 10;
    else num = 0;
    return num;
}

const answer = arr.map( v => solution(v) ).reduce( (acc, v) => acc += v, 0);
console.log(answer);