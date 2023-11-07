const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const [n, p] = inputData[0].split(' ').map(v => parseInt(v));
const [w, l, g] = inputData[1].split(' ').map(v => parseInt(v));
const info = inputData.slice(2, p + 2).map(str => str.split(' '));
const tc = inputData.slice(p + 2);

let sum = 0;
function solution(name) {
    let idx = -1;
    for (let [key, value] of info.entries()) {
        if (info[key][0] === name) {
            idx = key;
            break;
        }
    }

    if (idx === -1) {
        sum -= l;
    }
    else {
        if (info[idx][1] === 'W') sum += w;
        else sum -= l;
    }
    sum = sum > 0 ? sum : 0;
}

for (let item of tc) {
    solution(item);
    if (sum >= g) break;
}

const answer = sum < g ? "I AM IRONMAN!!" : "I AM NOT IRONMAN!!";
console.log(answer);