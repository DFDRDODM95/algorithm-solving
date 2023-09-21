const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const eof = input.indexOf("0 0");
const inputData = input.slice(0, eof).map( layer1 => layer1.split(' ').map( layer2 => parseInt(layer2)) );

const result = inputData.map( v => v[0] > v[1] ? "Yes" : "No" );
result.forEach( v => console.log(v) );