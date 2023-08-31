const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('');

  const size = "z".charCodeAt(0) - "a".charCodeAt(0) + 1;
  const result = Array(size)
    .fill("a".charCodeAt(0))
    .map((v, idx) => String.fromCharCode(v + idx))
    .map((v) => inputData.indexOf(v));

console.log(result.join(' '));