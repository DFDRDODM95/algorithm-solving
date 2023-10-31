const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData.slice(1, amount + 1);

let arr = [];
for (let item of tc) {
    if (item !== '0') {
        arr.push(parseInt(item));
    }
    else {
        arr.pop();
    }
}

const answer = arr.reduce( (acc, v) => acc += v, 0 ); 
console.log(answer);