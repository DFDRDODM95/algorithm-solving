const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('');

let numObj = {};
for (let item of inputData) {
    if (!numObj[item]) {
        numObj[item] = 1;
    }
    else {
        numObj[item]++;
    }
}

const numArr = Object.entries(numObj).sort( (a, b) => b[1] - a[1] );

let [not69, sixnine] = [ [], [] ];
for (let item of numArr){
    if (item[0] === '6' || item[0] === '9') {
        sixnine.push(item);
    }
    else {
        not69.push(item);
    }
}

if (not69.length === 0) not69.push(['n', 0]);
if (sixnine.length === 0) sixnine.push(['n', 0]);
const answer = Math.max(not69[0][1], Math.ceil( sixnine.reduce( (acc, v) => acc += v[1], 0) / 2));

console.log(answer);