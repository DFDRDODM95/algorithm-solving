const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').join('').split(' ').join('');

const obj = {};
for (let item of [...inputData]) {
    if (!obj[item]) {
        obj[item] = 1;
    }
    else {
        obj[item]++;
    }
}

const arr = Object.entries(obj).sort( (a, b) => b[1] - a[1] );
let max = arr[0][1];
let rst = '';
for (let item of arr) {
    if (item[1] === max) rst += item[0];
    else break;
}

rst = [...rst].sort().join('');
console.log(rst);