const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const t = parseInt(inputData[0]);
let rest = inputData.slice(1);
let tc = [];
while (rest.length > 0) {
    const [m, n, k] = rest[0].split(' ').map(v => parseInt(v));
    const pos = rest.slice(1, k + 1).map(str => str.split(' ').map(item => parseInt(item)) );
    let board = new Array(n).fill(0).map(v => new Array(m).fill(0));
    for (let item of pos) {
        const [x, y] = item;
        board[y][x] = 1;
    }
    tc.push(board);
    rest = rest.slice(k + 1);
}

let queue = [];
let [front, rear] = [0, 0];
const push = (x) => queue[rear++] = x;
const pop = () => queue[front++];
const empty = () => { if (rear - front === 0) {
    front = 0;
    rear = 0;
    return true;
}
else return false; };

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

let answer = [];
for (let item of tc) {
    const [n, m] = [ item.length, item[0].length ];
    queue = new Array( n * m + n + m + 1 ).fill(0);
    let vis = new Array(n).fill(0).map(v => new Array(m).fill(0));

    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (item[i][j] === 0 || vis[i][j]) continue;
            vis[i][j] = 1;
            push([j, i]);
            count++;
            while(!empty()) {
                const cur = pop();
                for (let dir = 0; dir < 4; dir++) {
                    const nx = cur[0] + dx[dir];
                    const ny = cur[1] + dy[dir];
                    if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
                    if (item[ny][nx] === 0 || vis[ny][nx]) continue;
                    vis[ny][nx] = 1;
                    push([nx, ny]);
                }
            }

        }
    }

    answer.push(count);
}

console.log(answer.join('\n'));