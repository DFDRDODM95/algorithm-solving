const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const [arrSize, amount] = inputData[0].split(' ').map(v => parseInt(v));
const tc = inputData.slice(1, amount + 1).map(str => str.split(' ').map( item => parseInt(item)) );

let arr = new Array(arrSize).fill(1).map( (v, idx) => v + idx );
function solution(innerArr) {
    const [i, j] = innerArr.map( v => v - 1 );
    [ arr[i], arr[j] ] = [ arr[j], arr[i] ];
}
tc.forEach(v => solution(v));

console.log( arr.join(' ') );