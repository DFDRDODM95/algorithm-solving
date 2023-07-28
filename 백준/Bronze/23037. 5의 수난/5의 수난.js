const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString();

const arr = [...inputData];

let result = arr.map( item => item ** 5 ).reduce( (acc, cur) => acc + cur, 0);

console.log(result);