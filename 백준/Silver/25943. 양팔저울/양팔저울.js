const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const pebbles = inputData[1].split(' ').slice(0, amount).map(v => parseInt(v));

let diff = pebbles[0] - pebbles[1];
for(let item of pebbles.slice(2)) {
    if (diff === 0) {
        diff += item;
    }
    else if (diff < 0) {
        diff += item;
    }
    else if (diff > 0) {
        diff -= item;
    }
}
diff = Math.abs(diff);

function addingWeight(num, cnt) {
    let arr = [ 100, 50, 20, 10, 5, 2, 1 ];
    let divider = -1;
    for (let item of arr) {
        if ( num >= item ) { 
            divider = item;
            break;
        }
    }
    
    let quotient = Math.trunc(num / divider);
    let rest = num % divider;
    let stones = cnt + quotient;
    return rest === 0 ? stones : addingWeight(rest, stones);
}
let count = 0;
console.log( addingWeight(diff, count) );