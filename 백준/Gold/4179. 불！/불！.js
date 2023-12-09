const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const [n, m] = inputData[0].split(' ').map(v => parseInt(v));
let board = inputData.slice(1, n + 1).map(str => str.split(''));

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

let queue = new Array( 2 * (n + 1) * (m + 1)).fill(0);
let [front, rear] = [0, 0];

const push = (x) => { queue[rear++] = x;};
const pop = () => {return queue[front++];};
const empty = () => {return rear - front === 0;}

let vis = new Array(n).fill(0).map(v => new Array(m).fill(0));

let people = [-1, -1];
let fires = [];
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (board[i][j] === 'J') { 
            people = [j, i];
        }
        else if (board[i][j] === 'F') {
            fires.push([j, i]);
        }
    }
}

for (let item of fires) {
    let [x, y] = item;
    board[y][x] = '#';
    push([x, y, 'F']);
}

vis[people[1]][people[0]] = 1;
push([people[0], people[1], 'J']);

let escape = false;
let answer = 0;
while(!empty() && escape === false) {
    let cur = pop();
    if (cur[2] === 'J') {
        for (let dir = 0; dir < 4; dir++) {
            let nx = cur[0] + dx[dir];
            let ny = cur[1] + dy[dir];
            if (nx < 0 || nx >= m || ny < 0 || ny >= n) {
                answer = vis[cur[1]][cur[0]];
                escape = true;
                break;
            } 
            if (vis[ny][nx] || board[ny][nx] === '#') continue;
            vis[ny][nx] = vis[cur[1]][cur[0]] + 1;
            push([nx, ny, 'J']);
        }
    }
    else if (cur[2] === 'F') {
        for (let dir = 0; dir < 4; dir++) {
            let nx = cur[0] + dx[dir];
            let ny = cur[1] + dy[dir];
            if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
            if (vis[ny][nx] || board[ny][nx] === '#') continue;
            board[ny][nx] = '#';
            push([nx, ny, 'F']);
        }
    }
}

if (escape === false) answer = "IMPOSSIBLE";
console.log(answer);