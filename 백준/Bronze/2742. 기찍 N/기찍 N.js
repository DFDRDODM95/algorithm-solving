const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString();

let result = "";
for (let i = 0; i < +input; i++) {
    result += +input - i + '\n';
}

result.substr(0, -1);

console.log(result);