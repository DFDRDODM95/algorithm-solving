const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(str => str.split(' ').map(item => parseInt(item)) );
const [n, m, k] = inputData[0];
tc = inputData.slice(1, k + 1);
let board = new Array(n).fill(0).map(v => new Array(m).fill(0));
for (let item of tc) {
    const [sx, sy, ex, ey] = item;
    for (let i = sy; i < ey; i++) {
        for (let j = sx; j < ex; j++) {
            board[i][j] = '#';
        }
    }
}

let queue = new Array( (n + 1) * (m + 1) ).fill(0);
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

let vis = new Array(n).fill(0).map(v => new Array(m).fill(0));

let cells = [];
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (!vis[i][j] && board[i][j] !== '#') {
            vis[i][j] = 1;
            push([i, j]);
            let cell = 1;
            while (!empty()) {
                const cur = pop();
                for (let dir = 0; dir < 4; dir++) {
                    const nx = cur[1] + dx[dir];
                    const ny = cur[0] + dy[dir];
                    if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
                    if (vis[ny][nx] || board[ny][nx] === '#') continue;
                    vis[ny][nx] = ++cell;
                    push([ny, nx]);
                }
            }
            cells.push(cell);
        }
    }
}

cells.sort( (a, b) => a - b);
const answer = [cells.length, cells.join(' ')].join('\n');
console.log(answer);