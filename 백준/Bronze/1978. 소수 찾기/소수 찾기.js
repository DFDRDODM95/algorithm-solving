const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const amount = parseInt(input[0]);
const inputData = input[1].split(' ').slice(0, amount).map(v => parseInt(v));

const isPrime = n => {
    for (let i = n - 1; i >= 2; i--) {
        if ( n % i === 0 ) return false;
    }
    return n === 1 ? false : true;
}

const answer = inputData.filter( v => isPrime(v) ).length;
console.log(answer);