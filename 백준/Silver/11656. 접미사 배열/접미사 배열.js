const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();

const postfixes = new Array(input.length).fill(0);
for (let i = 0; i < input.length; i++) {
    postfixes[i] = input.slice(i);
}

const answer = postfixes.sort();
console.log(answer.join('\n'));