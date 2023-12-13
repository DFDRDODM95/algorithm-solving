const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = parseInt(input);

const answer = Math.pow(2, inputData);
console.log(answer);