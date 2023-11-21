const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const n = parseInt(input);

let arr = new Array(n).fill(0);

let k = 666;
let idx = 0;
while(arr.at(-1) === 0) {
    if(k.toString().includes(666)) arr[idx++] = k;
    k++;
}

console.log(arr.at(-1));