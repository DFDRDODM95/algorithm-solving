const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
const band = {};
colors.forEach( (v, idx) => band[v] = [idx.toString(), 10 ** idx] );

const answer = parseInt(band[ input[0] ][0]+ band[ input[1] ][0]) * band[ input[2] ][1];
console.log(answer);