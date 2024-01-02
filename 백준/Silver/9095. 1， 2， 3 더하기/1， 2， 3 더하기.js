const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const [t, ...tc] = input.split('\n').map(v => parseInt(v));

let count = new Array(t).fill(0);
let idx = 0;
function func1(tg, sum, cnt) {
    if (sum > tg) return;
    else if (sum === tg) cnt[idx]++;
    for (let i = 1; i <= 3; i++) {
        func1(tg, sum + i,  cnt);
    }
}

for (let i = 0; i < tc.length; i++) {
    func1(tc[i], 0, count);
    idx++;
}

const answer = count.join('\n');
console.log(answer);