const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const amount = parseInt(input[0]);
const inputData = input.slice(1, amount + 1);

const state = `Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you
Never gonna stop`.split('\n');

let isSafe = true;
for(let item of inputData) {
    isSafe *= state.includes(item);
}

const hacked = isSafe ? "No" : "Yes"

console.log(hacked);