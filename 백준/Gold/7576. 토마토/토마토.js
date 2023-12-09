const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const [m, n] = inputData[0].split(' ').map(v => parseInt(v));
const board = inputData.slice(1, n + 1).map(str => str.split(' '));

let queue = new Array(n + 1).fill(0).map(v => new Array(m + 1).fill(0));
let [front, rear] = [0, 0];
const push = (x) => {queue[rear++] = x;};
const pop = () => {return queue[front++];};
const empty = () => {return rear - front === 0};

let vis = new Array(n).fill(0).map(v => new Array(m).fill(0));

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (board[i][j] === '1') {
            push([j, i]);
            vis[i][j] = 1;
        }
    }
}

while(!empty()) {
    let cur = pop();
    for (let dir = 0; dir < 4; dir++) {
        let nx = cur[0] + dx[dir];
        let ny = cur[1] + dy[dir];
        if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
        if (vis[ny][nx] || board[ny][nx] === '-1') continue;
        vis[ny][nx] = vis[cur[1]][cur[0]] + 1;
        push([nx, ny]);
    }
}

let max = vis[0][0] - 1;
let fillable = true;
for (let i = 0; i < n && fillable; i++) {
    for (let j = 0; j < m; j++) {
        if (vis[i][j] > max) max = vis[i][j] - 1;
        if (vis[i][j] === 0) {
            if (board[i][j] === '0') {
                max = -1;
                fillable = false;
                break;
            }
        }
    }
}

console.log(max);