const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

let a = "";

if (A > B){
    a = ">";
}
else if (A == B){
    a = "==";
}
else {
    a = "<";
}
console.log(a);