const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const [n, m] = inputData[0].split(' ').map(v => parseInt(v));
const board = inputData.slice(1, n + 1).map(str => str.split(' '));

let queue = new Array(n).fill(0).map(v => new Array(m).fill(0));
let [front, rear] = [0, 0];
const push = (x) => {queue[rear++] = x;};
const pop = () => {return queue[front++];};
const empty = () => {return rear - front === 0};

let vis = new Array(n).fill(0).map(v => new Array(m).fill(0));

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

function floodFill(x1, y1) {
    push([x1, y1]);
    let area = 1;
    while(!empty()) {
        let cur = pop();
        for (let dir = 0; dir < 4; dir++) {
            let nx = cur[0] + dx[dir];
            let ny = cur[1] + dy[dir];
            if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
            if (vis[ny][nx] || board[ny][nx] === '0') continue;
            vis[ny][nx] = 1;
            area++;
            push([nx, ny]);
        }
    }
    return area;
}

let count = 0;
let max = 0;
for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        if (board[j][i] !== '0' && vis[j][i] !== 1) {
            vis[j][i] = 1;
            let challenger = floodFill(i, j);
            max = challenger > max ? challenger : max;
            count++;
        }
    }
}

console.log([count, max].join('\n'));