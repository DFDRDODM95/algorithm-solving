const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
let tc = [];
let rest = inputData.slice(1);
for (let i = 0; i < n; i++) {
    const [w, h] = rest[0].split(' ').map(v => parseInt(v));
    const board = rest.slice(1, h + 1);
    tc.push([w, h, board]);
    rest = rest.slice(h + 1);
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

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

let answer = [];
for (let item of tc) {
    const [m, n] = [item[0], item[1]];
    let pic = item[2].map(v => v.split(''));

    queue = new Array( 2 * (n + 1) * (m + 1) ).fill(0);
    [front, rear] = [0, 0];
    let vis = new Array(n).fill(0).map(v => new Array(m).fill(0));

    let fires = [];
    let people = -1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (pic[i][j] === '@') people = [i, j];
            else if (pic[i][j] === '*') fires.push([i, j]);
        }
    }
    for (let item of fires) {
        let [y, x] = item;
        pic[y][x] = '#';
        push([y, x, '*']);
    }
    vis[people[0]][people[1]] = 1;
    push([people[0], people[1], '@']);

    let escape = [false, 0, 0];
    while(!empty() && !escape[0]) {
        const cur = pop();
        for (let dir = 0; dir < 4; dir++) {
            let nx = cur[1] + dx[dir];
            let ny = cur[0] + dy[dir];
            if (nx < 0 || nx >= m || ny < 0 || ny >= n) {
                if (cur[2] === '*') continue;
                else if (cur[2] === '@') { 
                    escape = [true, cur[0], cur[1]];
                    break;
                }
            }
            if (vis[ny][nx] || pic[ny][nx] === '#') continue;
            if (cur[2] === '*') {
                pic[ny][nx] = '#';
                push([ny, nx, '*']);
            }
            else if (cur[2] === '@') {
                vis[ny][nx] = vis[cur[0]][cur[1]] + 1;
                push([ny, nx, '@']);
            }
        }
    }

    if (!escape[0]) answer.push("IMPOSSIBLE");
    else answer.push(vis[escape[1]][escape[2]]);
}

console.log(answer.join('\n'));