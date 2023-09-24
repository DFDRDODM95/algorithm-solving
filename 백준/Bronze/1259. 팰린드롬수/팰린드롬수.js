const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const lastIndex = input.indexOf('0');
const inputData = input.slice(0, lastIndex);

inputData.forEach( v => {
    let answer = "no";
    if (v === [...v].reverse().join('')) answer = "yes";
    console.log(answer);
});