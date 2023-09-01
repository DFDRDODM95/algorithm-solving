const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const altered = inputData.map( v => parseInt( [...v.toString()].reverse().join('') ));
const answer = Math.max(altered[0], altered[1]);

console.log(answer);