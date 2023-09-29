const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const [n, f] = input.map(v => BigInt(v));

let cut = n - (n % 100n);
while( (cut % f) !== 0n ) {
      cut++;
}
console.log(cut.toString().split('').slice(-2).join(''));