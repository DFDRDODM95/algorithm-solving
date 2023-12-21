const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
const board = inputData.slice(1, n + 1).map(str => str.split(''));

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

let vis = new Array(n).fill(0).map(v => new Array(n).fill(0));

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

let total = 0;
let cell = [];
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n ; j++) {
        if (board[i][j] !== '0' && !vis[i][j]) {
            vis[i][j] = 1;
            push([i, j]);
            total++;

            let cnt = 1;
            while(!empty()) {
                let cur = pop();
                for (let dir = 0; dir < 4; dir++) {
                    let nx = cur[1] + dx[dir];
                    let ny = cur[0] + dy[dir];
                    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
                    if (vis[ny][nx] || board[ny][nx] === '0') continue;
                    vis[ny][nx] = 1;
                    push([ny, nx]);
                    cnt++;
                }
            }
            cell.push(cnt);
        }
    }
}
cell.sort( (a, b) => a - b );

const answer = [total, ...cell].join('\n');
console.log(answer);