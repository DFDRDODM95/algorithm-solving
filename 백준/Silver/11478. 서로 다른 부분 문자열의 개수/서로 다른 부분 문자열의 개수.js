const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();

const set1 = new Set();

for (let i = 1; i <= input.length; i++) {
    for (let j = 0; i + j < input.length + 1; j++) {
        let temp = input.slice(j, i + j);
        set1.add(temp);
    }
}
console.log(set1.size);