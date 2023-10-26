const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData.slice(1, amount + 1);

function recursion (str, l, r, cnt) {
    if (l >= r) return [1, cnt]
    else if (str.at(l) !== str.at(r)) return [0, cnt];
    else return recursion(str, l + 1, r - 1, cnt + 1);
}

tc.map(v => recursion(v, 0, v.length - 1, 1)).forEach(v => console.log(v.join(' ')));