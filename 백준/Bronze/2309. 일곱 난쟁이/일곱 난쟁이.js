let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

input.sort((a, b) => +a - +b);
let diff = input.reduce( (sum, current) => sum + +current, 0 ) - 100;

let [bad1, bad2] = [0, 0];
for (let i = 0; i < input.length - 1; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (+input[i] + +input[j] == diff) {
                [bad1, bad2] = [i, j];
            }
        }
    }

    input.splice(bad1, 1);
    input.splice(bad2 - 1, 1);

let result = "";
for(let item of input) {
    result += item + '\n';
}
result = result.substr(0, result.length - 1);

console.log(result);