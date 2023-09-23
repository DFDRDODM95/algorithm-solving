const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n').map( layer1 => layer1.split(' ').map(layer2 => parseInt(layer2)));
const amount = parseInt(input[0]);
const inputData = input.slice(1, amount + 1).map( v => v[0] + v[1]);

inputData.forEach(v => console.log(v));