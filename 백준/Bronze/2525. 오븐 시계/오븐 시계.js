const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const [prevH, prevM] = inputData[0].split(' ').map(v => parseInt(v));
const cost = parseInt(inputData[1]);

let hourAdder = Math.trunc( ( prevM + cost ) / 60 );
let nextM = (prevM + cost) % 60;
let nextH = (prevH + hourAdder) % 24;

console.log( [nextH, nextM].join(' ') );