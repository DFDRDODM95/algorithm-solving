const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData.slice(1, amount + 1).map(str => str.split(' ').reverse().map( item => BigInt(item) ) );

const Factorial = (num) => {
    result = 1n;
    for (let i = 1n; i <= num; i++) result *= i;
    return result;
}

function printAnswer(n, r) {
    const answer = (Factorial(n) / Factorial(r)) / Factorial(n - r);
    console.log(answer.toString());   
}

tc.forEach( v => printAnswer(v[0], v[1]) );