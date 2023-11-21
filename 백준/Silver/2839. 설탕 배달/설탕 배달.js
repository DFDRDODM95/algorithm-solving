const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const n = parseInt(input);

let a = Math.ceil(n / 5);
let b = Math.ceil(n / 3);

let arr = [];
for (let i = 0; i <= a; i++) {
    for (let j = 0; j <= b; j++) {
        let rest = n - ( 5 * i ) - ( 3 * j );
        if (rest === 0) arr.push(i + j);
    }
}

let rst = arr.sort( (a, b) => a - b );
const answer = rst.length === 0 ? -1 : rst.at(0);
console.log(answer);