const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const n = parseInt(input);

const len = n.toString().length;
let gen = n - ( 10 * len - len );
let flag = 0;
for (let i = 0; i < 10 * len - len; i++, gen++) {
    let arr = gen.toString().split('').map(v => parseInt(v));
    let sum = gen + arr.reduce( (acc, v) => acc += v, 0 );
    if (sum === n) {
        flag = 1;
        break;
    } 
}

if (flag === 0) gen = 0;
console.log(gen);