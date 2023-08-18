const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const [ A, B ] = input.map( v => parseInt(v) );

console.log( A + B );
console.log( A - B );
console.log( A * B );
console.log( Math.trunc(A / B) );
console.log( A % B );