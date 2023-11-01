const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const [amount, limit] = inputData[0].split(' ').map( (v, idx) => idx % 2 ? BigInt(v): parseInt(v)  );
const tc = inputData[1].split(' ').slice(0, amount).map( (v, idx) => [BigInt(v), idx]);

let obj = {};
for (let item of tc) {
    if (!obj[item[0]]) {
        obj[item[0]] = [1, item[1]];
    }
    else {
        obj[item[0]][0]++;
    }
}

function comp(l, r) {
    if (obj[l[0]][0] > obj[r[0]][0]) {
        return -1;
    }
    else if (obj[l[0]][0] === obj[r[0]][0]) {
        if (obj[l[0]][1] < obj[r[0]][1]) {
            return -1;
        }
    }
    return 1;
}

const answer = tc.sort( (a, b) => comp(a, b) ).map(v => v[0]);
console.log(answer.join(' '));