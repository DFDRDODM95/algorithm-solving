const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData[1].split(' ').map(v => parseInt(v));

const yFee = tc.map( v => Math.trunc((v / 30) + 1) * 10 ).reduce( (acc, v) => acc += v, 0 );
const mFee = tc.map( v => Math.trunc((v / 60) + 1) * 15 ).reduce( (acc, v) => acc += v, 0 );
const choice = mFee < yFee ? ['M', mFee] : mFee === yFee ? ["Y M", mFee] : ['Y', yFee];

console.log(choice.join(' '));