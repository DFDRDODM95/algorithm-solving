const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().trim().split('\n').map( v => v.split(' ') );

const [cont, k] = inputData[0].map( v => parseInt(v));
const list = inputData[1];

const result = list.slice(0, cont).filter( v => v < k ).join(' ');

console.log(result);