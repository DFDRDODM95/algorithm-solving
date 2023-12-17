const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(str => str.split(' ').map(item => parseInt(item)));
const [m, n, h] = inputData[0];
let board = [];
for (let i = 0; i < h; i++) {
    board.push(inputData.slice(1 + i * n, 1 + (i + 1) * n));
}

let queue = new Array(h * (n ** 2 + 2 * n + 1)).fill(0);
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

let dh = [1, -1];
let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

let vis = new Array(h).fill(0).map(row => new Array(n).fill(0).map(col => new Array(m).fill(0)) );

for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < m; k++) {
            if (board[i][j][k] === 1) {
                vis[i][j][k] = 1;
                push( [i, j, k] );
            }
        }
    }
}

while(!empty()) {
    let cur = pop();
    for (let dir = 0; dir < 4; dir++) {
        let nh = cur[0];
        let nx = cur[2] + dx[dir];
        let ny = cur[1] + dy[dir];
        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
        if (vis[nh][ny][nx] || board[nh][ny][nx] === -1) continue;
        vis[nh][ny][nx] = vis[cur[0]][cur[1]][cur[2]] + 1;
        push([nh, ny, nx]);
    }
    for (let dir = 0; dir < 2; dir++) {
        let nh = cur[0] + dh[dir];
        let [nx, ny] = [ cur[2], cur[1] ];
        if (nh < 0 || nh >= h) continue;
        if (vis[nh][ny][nx] || board[nh][ny][nx] === -1) continue;
        vis[nh][ny][nx] = vis[cur[0]][cur[1]][cur[2]] + 1;
        push([nh, ny, nx]);
    }
}

let max = 0;
for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < m; k++) {
            if (vis[i][j][k] === 0 && board[i][j][k] !== -1) {
                max = -1;
                [i, j, k] = [h, n, m];
                break;
            }
            if (vis[i][j][k] - 1 > max) max = vis[i][j][k] - 1;
        }
    }
}

console.log(max);