const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const [x, y] = input.split(' ');

const rev = str => parseInt( str.split('').reverse().join('') );
const answer = rev( rev(x) + rev(y) + '' );
console.log(answer);