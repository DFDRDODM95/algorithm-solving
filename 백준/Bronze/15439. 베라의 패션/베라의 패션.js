const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString();

const A = parseInt(inputData);

console.log ( A**2 - A );