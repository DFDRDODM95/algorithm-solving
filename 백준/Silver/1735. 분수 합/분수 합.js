const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(str => str.split(' ').map(item => parseInt(item)) );

function getLCM(a, b) {
    let ab = a * b;
    let r = a % b;
    for (; r = a % b; a = b, b = r) {};
    return ab / b;
}

function getGCD(a, b) {
    let r = a % b;
    for (; r = a % b; a = b, b = r) {};
    return b;
}

[frac1, frac2] = inputData;
let lcm = getLCM(frac1[1], frac2[1]);
let frac3 = frac1.map(v => v * lcm / frac1[1]);
let frac4 = frac2.map(v => v * lcm / frac2[1]);
let frac5 = [frac3[0] + frac4[0], lcm];

let gcd = getGCD(frac5[0], frac5[1]);
let frac6 = frac5.map(v => v / gcd);

console.log(frac6.join(' '));