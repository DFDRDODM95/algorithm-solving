const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData.slice(1, amount + 1).map(str => str.split(' ').map(item => parseInt(item)) );

let paper = new Array(100).fill(0).map( v => new Array(100).fill(0) );

function updatePaper(xPos, yPos) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            paper[xPos + i][yPos + j]++;
        }
    }
}

tc.forEach(v => updatePaper(v[0], v[1]));

let answer = 0;
for (let item of paper) {
    for (let cell of item) {
        if (cell > 0) answer++;
    }
}

console.log(answer);