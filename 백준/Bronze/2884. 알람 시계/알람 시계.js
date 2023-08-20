const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

let [h, m] = inputData.map( v => parseInt(v) );

m -= 45;

if (m < 0) {
    m += 60;
    h --;
}
if (h < 0) {
    h += 24;
}

console.log(h + ' ' + m);