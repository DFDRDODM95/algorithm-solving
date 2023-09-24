const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n').map(v => parseInt(v));

let modSet = new Set();
for(let item of input) {
    modSet.add(item % 42);
}

console.log(modSet.size);