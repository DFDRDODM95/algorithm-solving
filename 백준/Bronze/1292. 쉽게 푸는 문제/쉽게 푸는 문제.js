const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split(' ');
const [a, b] = input.map(v => parseInt(v));

let arr = new Array(1035).fill(0);

for (let i = 0; arr[b - 1] === 0; i++) {
  let k = i + 1;
    for (let j = 0; j < k; j++) {
      let entry = i * k / 2;
      arr[entry + j] = k;
    }
}

const answer = arr.slice(a - 1, b).reduce( (acc, v) => acc += v, 0);

console.log(answer);