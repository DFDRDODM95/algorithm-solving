const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const list = inputData.map( v1 => v1.split(' ').map( v2 => parseInt(v2)) );

list.forEach( v => console.log(v[0] + v[1]) );