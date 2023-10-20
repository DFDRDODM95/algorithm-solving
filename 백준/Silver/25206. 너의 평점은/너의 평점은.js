const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map( str => str.split(' ') );

const subGrade = {
    "A+" : 4.5,
    "A0" : 4.0,
    "B+" : 3.5,
    "B0" : 3.0,
    "C+" : 2.5,
    "C0" : 2.0,
    "D+" : 1.5,
    "D0" : 1.0,
    "F" : 0.0
}

let [sumGrade, sumMajor] = [0.0, 0.0];
for (let item of inputData) {
    if (item[2] === 'P') continue;
    sumGrade += parseFloat(item[1]);
    sumMajor += parseFloat(item[1]) * subGrade[item[2]];
}
let majorAvg = sumMajor / sumGrade;

console.log(majorAvg.toFixed(6));