const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();

let count = 0;
let arr = [ "c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let i = 0; i < input.length; i++) {
    let matched = false;
    for (let item of arr) {
        if (input.at(i) === item.at(0)) {
            if (input.slice(i, i + item.length) === item) {
                i += item.length - 1;
                matched = true;
                count++;
                break;
            }
        }
    }
    if (matched) continue;
    count++;
}

console.log(count);