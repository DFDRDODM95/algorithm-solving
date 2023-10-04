const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();

let answer = "NO";
for(let i = 1; i < input.length; i++) {
    let pref = [...input].slice(0, i).map(v => parseInt(v)).reduce( (acc, v) => acc *= v, 1 );
    let post = [...input].slice(i).map(v => parseInt(v)).reduce( (acc, v) => acc *= v, 1 );
    if (pref === post) {
        answer = "YES";
        break;
    }
}

console.log(answer);