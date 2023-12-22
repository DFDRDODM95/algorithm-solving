const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
const board = inputData.slice(1, n + 1).map(str => str.split(' ').map(item => parseInt(item)) );

const set1 = new Set();
for (let innerArr of board) {
    for (let item of innerArr) {
        set1.add(item);
    }
}
const heights = Array.from(set1);

let queue = new Array( (n + 1) ** 2 ).fill(0);
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

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

let safe = [];
for (let item of heights) {
    let vis = new Array(n).fill(0).map(v => new Array(n).fill(0));
    safe.push(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!vis[i][j] && board[i][j] >= item) {
                safe[safe.length - 1]++;
                vis[i][j] = 1;
                push([i, j]);
                while (!empty()) {
                    let cur = pop();
                    for (let dir = 0; dir < 4; dir++) {
                        let nx = cur[1] + dx[dir];
                        let ny = cur[0] + dy[dir];
                        if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
                        if (vis[ny][nx] || board[ny][nx] < item) continue;
                        vis[ny][nx] = 1;
                        push([ny, nx]);
                    }
                }
            }

        }
    }
}

let max = 0;
for (let item of safe) max = item > max ? item : max;

console.log(max);