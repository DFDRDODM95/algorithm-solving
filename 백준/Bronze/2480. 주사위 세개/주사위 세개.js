const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split(' ').map(v => parseInt(v));

let countObj= {};
for (let item of inputData) {
    if (!countObj[item]) {
        countObj[item] = 1;
    }
    else {
        countObj[item]++;
    }
}
let countArr = Object.entries(countObj).sort( (a, b) => b[1] - a[1] );

let price = 0;
if (countArr[0][1] === 3) {
    price += 10000 + ( countArr[0][0] * 1000 );
}
else if (countArr[0][1] === 2) {
    price += 1000 + ( countArr[0][0] * 100);
}
else {
    countArr = countArr.sort( (a, b) => b[0] - a[0] );
    price += countArr[0][0] * 100;
}

console.log(price);