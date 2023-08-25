const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

const amount = parseInt(inputData[0]);
const list = inputData.splice(1, amount).map( v1 => v1.split(' ').map( v2 => parseInt(v2)) );

list.forEach( (v, idx) => console.log(`Case #${idx + 1}: ${v[0]} + ${v[1]} = ${ v[0] + v[1] }`));