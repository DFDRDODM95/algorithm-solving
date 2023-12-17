const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
const board = inputData.slice(1, n + 1).map(v => v.split(''));

let queue = new Array (n ** 2 + 2 * n + 1).fill(0);
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

let vis = new Array(n).fill(0).map(v => new Array(n).fill(0));
let vis2 = new Array(n).fill(1).map(v => new Array(n).fill(1));

let answer = [0, 0];
let blue = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (!vis[i][j]) {
            vis[i][j] = 1;
            answer[0]++;
            if (board[i][j] !== 'B') vis2[i][j] = 0;
            else blue++;
            push([j, i, board[i][j]]);
            while(!empty()) {
                let cur = pop();
                for (let dir = 0; dir < 4; dir++) {
                    let nx = cur[0] + dx[dir];
                    let ny = cur[1] + dy[dir];
                    if (ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
                    if (vis[ny][nx] || cur[2] !== board[ny][nx]) continue;
                    vis[ny][nx] = 1;
                    if (board[ny][nx] !== 'B') vis2[ny][nx] = 0;
                    push([nx, ny, board[ny][nx]]);
                }
            }
        } 
    }
}

answer[1] += blue;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (!vis2[i][j]) {
            vis2[i][j] = 1;
            answer[1]++;
            push([j, i, board[i][j]]);
            while(!empty()) {
                let cur = pop();
                for (let dir = 0; dir < 4; dir++) {
                    let nx = cur[0] + dx[dir];
                    let ny = cur[1] + dy[dir];
                    if (ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
                    if (vis2[ny][nx] || board[ny][nx] === 'B') continue;
                    vis2[ny][nx] = 1;
                    push([nx, ny, board[ny][nx]]);
                }
            }
        }
    }
}

console.log(answer.join('\n'));