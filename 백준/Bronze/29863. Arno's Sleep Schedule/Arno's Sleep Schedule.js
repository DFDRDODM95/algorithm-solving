const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n').map(v => parseInt(v));

const [start, end] = input;
let sleep = 0;

if (start > end) {
    sleep += 24 - start;
    sleep += end;
}
else {
    sleep += end - start;
}

console.log(sleep);