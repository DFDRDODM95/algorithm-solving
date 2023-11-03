const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const [doc, word] = input.split('\n');

let count = 0;
let rest = doc.slice();
let idx = rest.indexOf(word);
while(idx !== -1) {
    count ++;
    rest = rest.slice(idx + word.length);
    idx = rest.indexOf(word);
}

console.log(count);