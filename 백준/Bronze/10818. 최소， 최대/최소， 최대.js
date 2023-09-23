const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const amount = parseInt(input[0]);
const inputData = input[1].split(' ').slice(0, amount).map( v => parseInt(v) );

const answer = inputData.slice().sort( (a, b) => a - b );
console.log( [answer.at(0), answer.at(-1)].join(' ') );