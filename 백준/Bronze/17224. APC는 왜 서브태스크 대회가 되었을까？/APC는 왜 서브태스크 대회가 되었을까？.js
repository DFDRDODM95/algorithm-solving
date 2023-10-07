const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const [n, l, k] = inputData[0].split(' ').map(v => parseInt(v));

const quiz = inputData.slice(1, n + 1).map( str => str.split(' ').map( item => parseInt(item)) ).sort( (a, b) => a[1] - b[1] );
let score = 0;
let count = 0;
for (let [key, value] of quiz.entries()) {
    if ( l >= value[0] ) { 
        count++;
        score += 100;
        if ( l >= value[1] ) score += 40;
    }
    if ( count >= k ) break;
}

console.log(score);