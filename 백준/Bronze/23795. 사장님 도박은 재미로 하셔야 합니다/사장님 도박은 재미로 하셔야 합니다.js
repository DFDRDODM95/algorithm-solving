const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const eof = inputData.indexOf("-1");
const result = inputData.slice(0, eof).reduce( (acc, cur) => acc + Number(cur), 0);

console.log(result);