const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
let n = parseInt(input);

let min = n - 1;
let count = [];
function func1(a, k) {
    if (a === 1) {
        if (k < min) min = k;
        return ;
    }
    else if (k > min) return;
    
    if (a % 3 === 0) func1(a / 3, k + 1);
    if (a % 2 === 0) func1(a / 2, k + 1);
    func1(a - 1, k + 1);
}
func1(n, 0);

console.log(min);