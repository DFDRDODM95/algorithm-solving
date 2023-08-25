const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString();

const input = parseInt(inputData);

const arr = Array(input).fill(1).map( (v, idx, arr) => '*'.repeat(arr.length).split('').map( (v2, idx2) => idx2 < arr.length - (idx + 1) ? ' ' : v2).join('') );
arr.forEach( v => console.log(v) );