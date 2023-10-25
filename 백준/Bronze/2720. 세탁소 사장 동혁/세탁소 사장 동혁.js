const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData.slice(1, amount + 1).map(v => parseInt(v));

let coins = [25, 10, 5, 1];

function solution(num) {
    let rest = num;
    let startIdx = -1;
    for (let [key, value] of coins.entries()) {
        if (rest >= value) {
            startIdx = key
            break;
        }
    }

    let arr = [0, 0, 0, 0];
    for (let i = startIdx; i < coins.length; i++) {
        arr[i] = Math.trunc(rest / coins[i]);
        rest -= coins[i] * arr[i];
    }
    console.log(arr.join(' '));
}

tc.forEach(v => solution(v));