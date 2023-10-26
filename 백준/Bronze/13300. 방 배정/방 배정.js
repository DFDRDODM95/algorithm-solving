const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(str => str.split(' ').map(item => parseInt(item)));
const [n, k] = inputData[0];
const tc =  inputData.slice(1, n + 1);

let classInfo = new Array(6).fill(0).map( v => new Array(2).fill(0) );

for (let item of tc) {
    classInfo[item[1] - 1][item[0]]++;
}

let count = 0;
for (let innerArr of classInfo) {
    for (let item of innerArr) {
        count += Math.ceil(item / k);
    }
}

console.log(count);