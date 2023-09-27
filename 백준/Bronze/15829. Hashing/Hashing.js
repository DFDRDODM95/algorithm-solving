const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const amount = parseInt(input[0]);
const inputData = input[1].slice(0, amount);

const answer = [...inputData].reduce( (acc, v, idx) => {
    const aton = v.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    acc += BigInt(aton) * (31n ** BigInt(idx));
    return acc;
}, 0n) % 1234567891n;

console.log(answer.toString());