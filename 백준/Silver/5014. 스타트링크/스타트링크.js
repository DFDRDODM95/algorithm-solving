const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const [F, S, G, U, D] = input.split(' ').map(v => parseInt(v));

let queue = new Array(2 * (F + 1)).fill(0);
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

let vis = new Array(F + 1).fill(0);
vis[0] = -1;
let dy = [U, -1 * D];

push(S);
vis[S] = 1;
while(!empty() && !vis[G]) {
    let cur = pop();
    for (let dir = 0; dir < 2; dir++) {
        let ny = cur + dy[dir];
        if (ny < 0 || ny > F) continue;
        if (vis[ny]) continue;
        vis[ny] = vis[cur] + 1;
        push(ny);
    }
}

const answer = vis[G] !== 0 ? vis[G] - 1: "use the stairs";
console.log(answer);