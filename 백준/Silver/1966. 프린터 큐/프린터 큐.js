const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);

let tc = new Array(amount).fill(0);
for (let i = 0; i < amount; i++) {
    tc[i] = inputData.slice(2 * i + 1, 2 * i + 3).map(str => str.split(' ').map(item => parseInt(item)) );
}

let rst = '';
for (let item of tc) {
    const [n, m] = item[0];
    let elem = item[1].map( (v, idx) => [v, idx] );
    let target = elem[m];

    let priority = elem.map(v => v[0]).sort( (a, b) => a - b );
    let max = priority.pop();

    let printed = 0;
    for (let i = 0; ;i++) {
        if (elem[i][0] !== max) {
            elem.push(elem[i]);
        }
        else {
            printed++;
            if (elem[i] === target) break;
            max = priority.pop();
        }
    }
    rst += printed + '\n';
}
console.log(rst);