const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const [playerNumber, rounds] = input[0].split(' ').map(v => parseInt(v));
const cards = input.slice(1, playerNumber + 1).map( str => str.split(' ').slice(0, rounds).map( item => parseInt(item)).sort( (a, b) => b - a ));
let score = new Array(playerNumber).fill(0);

let stk = [];
for (let i = 0; i < rounds; i++) {
    stk = [[cards[0][i], 0]];
    for (let j = 1; j < playerNumber; j++) {
        if (stk.at(-1)[0] < cards[j][i]) {
            stk = [];
            stk.push([cards[j][i], j]);
        }
        else if (stk.at(-1)[0] === cards[j][i]) {
            stk.push([cards[j][i], j]);
        }
    }
    for (let item of stk) {
        score[item[1]]++;
    }
}


for (let [key, value] of score.entries()) {
    score[key] = [key, value];
}

score = score.sort( (a, b) => b[1] - a[1] );
let topScore = score.at(0);
score = score.filter( v => v[1] === topScore[1] ).map(v => v[0] + 1).sort( (a, b) => a - b);

console.log( score.join(' ') );