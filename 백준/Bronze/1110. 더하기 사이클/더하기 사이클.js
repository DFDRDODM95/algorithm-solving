const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.length < 2 ?  '0' + input : input;

let count = 0;
function getCycle(str) {
    const prefix = str.at(-1);
    const postfix = str.split('').map(v => parseInt(v)).reduce( (acc, v) => acc += v, 0).toString().at(-1);
    const altered = prefix + postfix;
    count++;
    return altered === inputData ? count : getCycle(altered);
}

console.log(getCycle(inputData));