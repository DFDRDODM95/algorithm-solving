const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(str => str.split(' ') );
const [n, m] = inputData[0].map(v => parseInt(v));
const board = inputData.slice(1, n + 1);

let house = [];
let store = [];
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (board[i][j] === '1') house.push([i, j]);
        else if (board[i][j] === '2') store.push([i, j]);
    }
}

let dist = new Array(house.length).fill(0).map(v => new Array(store.length));
for (let i = 0; i < house.length; i++) {
    let [r1, c1] = house[i];
    for (let j = 0; j < store.length; j++) {
        let [r2, c2] = store[j];
        dist[i][j] = Math.abs(r2 - r1) + Math.abs(c2 - c1);
    }
}

let chosen = [];
let arr = new Array(m).fill(0);
function func1(k, a){
    if (k === m) {
        chosen.push(arr.slice());
        return;
    }
    for (let i = a; i < store.length; i++) {
        arr[k] = i;
        func1(k + 1, i + 1);
    }
}
func1(0, 0);

let answer = ( 2 * n - 2 ) * m * house.length;
for (let item of chosen) {
    let sum = 0;
    for (let i = 0; i < house.length; i++) {
        let min = 2 * n - 2;
        for (let j = 0; j < item.length; j++) {
            min = min < dist[i][item[j]] ? min : dist[i][item[j]];
        }
        sum += min;
    }
    answer = answer < sum ? answer : sum;
}

console.log(answer);