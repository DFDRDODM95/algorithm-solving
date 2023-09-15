const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString();

const input = parseInt(inputData);

const result = Array(input).fill(1).map( (v, idx) => v + idx ).reduce( (acc, v) => acc * v, 1 );

console.log(result);