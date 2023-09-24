const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const amount = parseInt(input[0]);
const inputData = input.slice(1, amount + 1).map( v => v.split(''));

for(let innerArr of inputData) {
    let sum = 0;
    let streak = 0;
    for(let item of innerArr) {
        if (item === 'O') {
            streak++;
            sum += streak;
        }
        else if (item === 'X') {
            streak = 0;
        }
    }
    console.log(sum);
}