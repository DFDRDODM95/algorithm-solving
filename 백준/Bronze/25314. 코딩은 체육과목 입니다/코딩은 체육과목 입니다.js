let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let num = Math.floor( Number(input) / 4 );

let result = "";
for (let i = 0; i < num; i++) {
    result += "long "
}
result += "int";

console.log(result);