const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(str => str.split(' ').map(v => parseInt(v)) );

let arr = new Array(20).fill(1).map( (v, idx) => v + idx );
function solution(s, e) {
    arr = arr.slice(0, s).concat( arr.slice(s, e + 1).reverse()).concat(arr.slice(e + 1));
}

inputData.forEach( v => solution(v[0] - 1, v[1] - 1) );
console.log(arr.join(' '));