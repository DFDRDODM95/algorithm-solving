const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString();

const [k, d, a] = inputData.split('/').map ( item => Number(item));

const result = k + a < d || d === 0 ? "hasu" : "gosu"
console.log(result);