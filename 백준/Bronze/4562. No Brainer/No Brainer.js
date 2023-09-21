const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const k = parseInt(input[0]);
const inputData = input.slice(1, k + 1).map( layer1 => layer1.split(' ').map( layer2 => parseInt(layer2) ) );

const result = inputData.map( v => v[0] >= v[1] ? "MMM BRAINS" : "NO BRAINS" );
result.forEach( v => console.log(v) );