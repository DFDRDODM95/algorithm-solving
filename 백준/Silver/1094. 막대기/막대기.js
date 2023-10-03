const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = parseInt(input);

const answer = inputData.toString(2).split('').reduce( (acc, v) => {
    return v === '1' ? acc + 1 : acc;
}, 0);

console.log(answer);