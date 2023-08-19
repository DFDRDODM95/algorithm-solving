const input = require('fs').readFileSync('/dev/stdin').toString();

const iNum = parseInt(input);
let result = null;
if ( iNum >= 90 ) {
    result = 'A';
}
else if ( iNum >= 80 ) {
    result = 'B';
}
else if ( iNum >= 70 ) {
    result = 'C';
}
else if ( iNum >= 60 ) {
    result = 'D';
}
else {
    result = 'F';
}

console.log(result);