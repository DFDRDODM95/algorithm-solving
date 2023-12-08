const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const board = input.split('\n').map(str => str.split(''));

let trimPoint = 0;
for (let [key, item] of board.entries()) {
    if (item.some(v => v !== '.')) {
        trimPoint = key;
        break;
    }
}
let opt = board.slice(trimPoint);
let [n, m] = [opt.length, opt[0].length];

let chain = 0;
function update() {
    const dx = [ 1, 0, -1, 0 ];
    const dy = [ 0, 1, 0, -1 ];

    let queue = new Array( 2 * n * m ).fill(0);
    let [front, rear] = [0, 0];
    let pop = () => { return queue[front++]; }
    let empty = () => { return rear - front; }

    function floodFill(alpha) {
        let vis = new Array(n).fill(0).map(v => new Array(m).fill(0) );
        let popped = false;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (opt[i][j] === '.' || vis[i][j]) continue;
                if (opt[i][j] !== alpha) continue;
                let pos = [[j, i]];
                let count = 1;
                vis[i][j] = 1;
                queue[rear++] = [j, i];

                while(empty()) {
                    let cur = pop();
                    for (let dir = 0; dir < 4; dir++) {
                        let nx = cur[0] + dx[dir];
                        let ny = cur[1] + dy[dir];
                        if (nx < 0 || nx > m || ny < 0 || ny >= n) continue;
                        if (vis[ny][nx] || opt[ny][nx] !== alpha) continue;
                        vis[ny][nx] = 1;
                        pos.push([nx, ny]);
                        count++;
                        queue[rear++] = [nx, ny];
                    }
                }
                if (count >= 4) {
                    popped = true;
                    for (let item of pos) {
                        let [x, y] = item;
                        opt[y][x] = '.';
                    }
                }
                else pos = [];
            }
        }

        return popped;
    }

    function tilt() {
        for (let j = 0; j < m; j++) {
            let temp = new Array(n).fill('.');
            let idx = 0;
            for (let i = n - 1; i >= 0; i--) {
                if (opt[i][j] === '.') continue;
                else temp[idx++] = opt[i][j];
            }
            for (let i = 0; i < temp.length; i++) opt[n - 1 - i][j] = temp[i];
        }
    }

    if (floodFill('R') + floodFill('G') + floodFill('B') + floodFill('Y') + floodFill('P')) {
        chain++;
        tilt();
        update();
    }
}

update();
console.log(chain);