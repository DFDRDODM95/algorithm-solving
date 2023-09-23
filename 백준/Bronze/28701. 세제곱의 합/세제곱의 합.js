const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = parseInt(input);

const sum = new Array(inputData).fill(1).map( (v, idx) => v + idx ).reduce( (acc, v) => acc += v, 0);
const powerSum = sum ** 2;
const sumCubes = new Array(inputData).fill(1).map( (v, idx) => v + idx ).map( v => v ** 3).reduce( (acc, v) => acc += v, 0);

[sum, powerSum, sumCubes].forEach( v => console.log(v) );