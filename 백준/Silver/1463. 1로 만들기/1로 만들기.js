// https://blog.encrypted.gg/974
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const n = parseInt(input);

let d = new Array(n + 1);
d[1] = 0;
for(let i = 2; i <= n; i++) {
    d[i] = d[i - 1] + 1;
    if (i % 2 === 0) d[i] = Math.min(d[i], d[i / 2] + 1);
    if (i % 3 === 0) d[i] = Math.min(d[i], d[i / 3] + 1);
}

console.log(d[n]);