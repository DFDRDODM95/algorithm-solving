const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const [n, k] = input.split(' ').map(v => parseInt(v));

let lim = -1;
for (let i = 0; lim <= k; i++) lim = Math.pow(2, i) * n;
let vis = new Array(100001).fill(0);

const action = [];
action.push( (x) => x + 1 );
action.push( (x) => x - 1 );
action.push( (x) => 2 * x );

let queue = new Array(100001).fill(0);
let [front, rear] = [0, 0];

const pop = () => queue[front++];
const push = (x) => queue[rear++] = x;
const empty = () => rear - front === 0;

push([n, 0]);
let answer = n === k ? 0 : -1;
while (!empty() && answer === -1) {
    let cur = pop();
    for (let i = 0; i < 3; i++) {
        let nx = action[i](cur[0]);
        if (nx < 0 || nx > lim) continue;
        if (vis[nx]) continue;
        vis[nx] = 1;
        if (nx === k) {
            answer = cur[1] + 1;
            [rear, front] = [0, 0];
            break;
        }
        if (answer === -1) push([nx, cur[1] + 1]);
    }
}

console.log(answer);