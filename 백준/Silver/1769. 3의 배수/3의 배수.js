const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const [a, count] = input.length > 1 ? solution(input, 0) : [input, 0];

console.log(count);
console.log( a % 3 === 0 ? "YES" : "NO" );

function solution(str, cnt) {
    let A = str.split('').map(v => parseInt(v)).reduce( (sum, v) => sum += v, 0 );
    cnt++;
    
    return A >= 10 ? solution (A.toString(), cnt) : [A, cnt];
}