const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
const board = inputData.slice(1, n + 1).map(str => str.split(' '));

let [blue, white] = [0, 0];

function func1(pic) {
    if (pic.length === 1) {
        if (pic[0][0] === '1') blue++;
        else white++;
        return;
    }

    let first = pic[0][0];
    let same = true;
    for (let item of pic) {
        if (item.some(v => v !== first)) {
            same = false;
            break;
        }
    }
    if (same) {
        if (first === '1') blue++;
        else white++;
        return;
    }
    else {
        for (let i = 0; i < pic.length; i += pic.length / 2) {
            for (let j = 0; j < pic[0].length; j += pic[0].length / 2) {
                let piece = pic.slice(i, i + (pic.length / 2) ).map(v => v.slice(j, j + (pic.length / 2) ) );
                func1(piece);
            }
        }
    }
}
func1(board);

console.log([white, blue].join('\n'));