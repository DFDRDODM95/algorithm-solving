const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
const tc = inputData.slice(1, n + 1).map(v => { 
    let temp = v.split(' ');
    return [temp[0]].concat(temp.slice(1).map(item => parseInt(item) ) );
});

function comp(a, b) {
    if (a[1] !== b[1]) return b[1] - a[1];
    else if (a[2] !== b[2]) return a[2] - b[2];
    else if (a[3] !== b[3]) return b[3] - a[3];
    else {
        const min = Math.min(a[0].length, b[0].length);
        for (let i = 0; i < min; i++) {
            const [ac, bc] = [a[0][i].charCodeAt(0), b[0][i].charCodeAt(0)];
            if (ac === bc) continue;
            return ac - bc;
        }
    }
}

const answer = tc.sort( (a, b) => comp(a, b) ).map(v => v[0]).join('\n');
console.log(answer);