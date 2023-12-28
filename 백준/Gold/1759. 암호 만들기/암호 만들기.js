const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(str => str.split(' '));
const [l, c] = inputData[0].map(v => parseInt(v));
const tc = inputData[1].sort();

let arr = new Array(l).fill(0);
const vowels = [ 'a', 'e', 'i', 'o', 'u' ];
const consonants = new Array(26).fill('a'.charCodeAt(0)).map( (v, idx) => String.fromCharCode(v + idx) ).filter(v => !vowels.includes(v));

let rst = [];
function func1(k, a) {
    if (k === l) {
        let [vCnt, cCnt] = [0, 0];
        for (let item of arr) {
            if (consonants.includes(item)) cCnt++;
            if (vowels.includes(item)) vCnt++;
        }
        if (vCnt >= 1 && cCnt >= 2) rst.push(arr.join(''));
        return;
    }
    for (let i = a; i < c; i++) {
        arr[k] = tc[i];
        func1(k + 1, i + 1);
    }
}
func1(0, 0);

const answer = rst.join('\n');
console.log(answer);