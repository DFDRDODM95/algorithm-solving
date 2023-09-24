const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const last = input.indexOf("0 0 0");
const inputData = input.slice(0, last).map( innerArr => innerArr.split(' ').map( item => parseInt(item)));

const isRight = (c, a, b) => {
    return Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2) ? "right" : "wrong";
}
const answer = inputData.map(v => v.sort( (a, b) => b - a )).map( v => isRight(v[0], v[1], v[2]));

answer.forEach( v => console.log(v) );