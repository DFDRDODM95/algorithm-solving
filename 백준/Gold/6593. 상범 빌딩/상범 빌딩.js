const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
let tc = [];
let rest = inputData.slice();

while (rest[0] !== "0 0 0") {
    const [L, R, C] = rest[0].split(' ').map(v => parseInt(v));
    let board = [];
    let chock = 0;
    for (let i = 0; i < L; i++) { 
        let temp = rest.slice(1 + (R + 1) * i, 1 + (R + 1) * i + R).map(v => v.split(''));
        board.push(temp);
        chock = 1 + (R + 1) * (i + 1);
    }
    tc.push(board);
    rest = rest.slice(chock);
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
let dh = [1, -1];

let answer = [];
for (let item of tc) {
    const [L, R, C] = [item.length, item[0].length, item[0][0].length];
    queue = new Array( (R + 1) * (C + 1) + 2 ).fill(0);
    [front, rear] = [0, 0];
    let vis = new Array(L).fill(0).map(innerArr => new Array(R).fill(0).map(item => new Array(C).fill(0)));
    for (let i = 0; i < L; i++) {
        for (let j = 0; j < R; j++) {
            let sIdx = item[i][j].indexOf('S');
            if (sIdx === -1) continue;
            else {
                vis[i][j][sIdx] = 1;
                push([i, j, sIdx]);

                while (!empty()) {
                    let cur = pop();
                    for (let dir = 0; dir < 4; dir++) {
                        let nx = cur[2] + dx[dir];
                        let ny = cur[1] + dy[dir];
                        let nh = cur[0];
                        if (nx < 0 || nx >= C || ny < 0 || ny >= R) continue;
                        if (vis[nh][ny][nx] || item[nh][ny][nx] === '#') continue;
                        vis[nh][ny][nx] = vis[cur[0]][cur[1]][cur[2]] + 1;
                        push([nh, ny, nx]);
                    }
                    for (let dir = 0; dir < 2; dir++) {
                        let nx = cur[2];
                        let ny = cur[1];
                        let nh = cur[0] + dh[dir];
                        if (nh < 0 || nh >= L) continue;
                        if (vis[nh][ny][nx] || item[nh][ny][nx] === '#') continue;
                        vis[nh][ny][nx] = vis[cur[0]][cur[1]][cur[2]] + 1;
                        push([nh, ny, nx]);
                    }
                }
            }
        }
    }

    for (let i = 0; i < L; i++) {
        for (let j = 0; j < R; j++) {
            let eIdx = item[i][j].indexOf('E');
            if (eIdx === -1) continue;
            else if (vis[i][j][eIdx]) answer.push("Escaped in " + (vis[i][j][eIdx] - 1) + " minute(s).");
            else answer.push("Trapped!");
        }
    }
}

console.log(answer.join('\n'));