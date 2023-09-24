const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n').map(v => parseInt(v));
const multi = input.reduce( (acc, v) => acc *= v, 1).toString().split('');

let charCount = {};
for (let i = 0; i < 10; i++) {
    charCount[i.toString()] = 0;
}
for (let item of multi) {
    charCount[item]++;
}

let charArr = Object.entries(charCount).sort( (a, b) => a[0] - b[0] );

charArr.forEach( v => console.log(v.at(-1)) );