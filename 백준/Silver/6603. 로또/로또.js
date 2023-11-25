const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(str => str.split(' ')).slice(0, -1);
const tc = inputData.map( v => v.slice(1) );

let rst = '';
for (let item of tc) {
    let arr = new Array(6).fill(0);

    function func1 (k, a) {
        if (k === 6) {
            rst += arr.join(' ') +'\n';
            return;
        }
        for (let i = a; i < item.length; i++) {
            arr[k] = item[i];
            func1(k +1, i + 1);
        }
    }

    func1(0, 0);
    rst += '\n';
}

console.log(rst);