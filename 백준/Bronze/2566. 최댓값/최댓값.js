const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(str => str.split(' ').map(item => parseInt(item)) );

let [x, y] = [0, 0];
let max = 0;

for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
        if(inputData[i][j] >= max) {
            max = inputData[i][j];
            [x, y] = [i + 1, j + 1];
        }
    }
}

console.log(max);
console.log([x, y].join(' '));