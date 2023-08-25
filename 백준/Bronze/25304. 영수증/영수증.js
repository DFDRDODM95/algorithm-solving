const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

const [price, amount] = [ inputData[0], inputData[1] ].map( v => parseInt(v));
const list = inputData.splice(2, amount).map( v => v.split(' ').map( v => parseInt(v)) );

const sum = list.reduce( (acc, v) => acc += v[0] * v[1], 0);
const result = price === sum ? "Yes" : "No";

console.log(result);