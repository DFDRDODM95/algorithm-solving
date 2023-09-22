const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const [amount, inputData] = [parseInt(input[0]), input.slice(1)];

const classInput = `Algorithm 204
DataAnalysis 207
ArtificialIntelligence 302
CyberSecurity B101
Network 303
Startup 501
TestStrategy 105`.split('\n').map( v => v.split(' '));

let classMap = new Map();
for(let item of classInput) {
    classMap.set(item[0], item[1]);
}

for(let item of inputData) {
    console.log(classMap.get(item));
}