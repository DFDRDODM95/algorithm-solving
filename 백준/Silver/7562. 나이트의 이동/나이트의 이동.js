const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
let tc = [];
for (let i = 0; i < n; i++) {
    const I = parseInt(inputData[1 + 3 * i]);
    const temp = inputData.slice(2 + 3 * i, 2 + 3 * i + 2).map(str => str.split(' ').map(item => parseInt(item)) );
    tc.push([I, temp]);
}

let queue = [];
let [front, rear] = [0, 0];
const push = (x) => queue[rear++] = x;
const pop = () => queue[front++];
const empty = () => {
    if (rear - front === 0) {
        [front, rear] = [0, 0];
        return true;
    }
    return false;
}

const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
const dy = [1, 2, 2, 1, -1, -2, -2, -1];

let set1 = new Set();
for (let i = 0; i < 8; i++) {
    set1.add([dx[i], dy[i]]);
}

let answer = [];
for (let item of tc) {
    const I = item[0];
    const [start, end] = item[1];

    queue = new Array(I ** 2 + 2 * I + 1).fill(0);
    [front, rear] = [0, 0];
    let board = new Array(I).fill(0).map(col => new Array(I).fill(0));
    let vis = new Array(I).fill(0).map(col => new Array(I).fill(0));

    board[start[0]][start[1]] = 1;
    vis[start[0]][start[1]] = 1;
    push(start);

    while(!empty() || vis[end[0]][end[1]] === 0) {
        let cur = pop();
        for (let dir = 0; dir < 8; dir++) {
            let nx = cur[0] + dx[dir];
            let ny = cur[1] + dy[dir];
            if (nx < 0 || nx >= I || ny < 0 || ny >= I) continue;
            if (vis[nx][ny]) continue;
            vis[nx][ny] = vis[cur[0]][cur[1]] + 1;
            push([nx, ny]);
        }
    }
    let count = vis[end[0]][end[1]] - 1;
    answer.push(count);
}

console.log(answer.join('\n'));