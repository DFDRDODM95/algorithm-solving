const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n').map(str => str.split(' '));
const [n, m] = inputData[0].map(v => parseInt(v));
const board = inputData.slice(1, n + 1);

let visible = new Array(n).fill(0).map(v => new Array(m).fill(0));
let tvInfo = [];

let walls = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (board[i][j] === '0') continue;
        if (board[i][j] === '6') {
            walls++;
            continue;
        }
        tvInfo.push([board[i][j], i, j]);
    }
}

let map1 = new Map();
map1.set('1', 4);
map1.set('2', 2);
map1.set('3', 4);
map1.set('4', 4);
map1.set('5', 1);

let arr = new Array(tvInfo.length).fill(0);
let tvInfo2 = [];
function func1(k) {
    if (k === tvInfo.length) {
        tvInfo2.push( tvInfo.map((v, idx) => v.concat(arr[idx]) ) );
        return;
    }
    let lim = map1.get(tvInfo[k][0]);
    for (let i = 0; i < lim; i++) {
        arr[k] = i;
        func1(k + 1);
    }
}
func1(0);

let tvInfo3 = [];
for (let item of tvInfo2) {
    let board2 = new Array(n).fill(0).map(v => new Array(m).fill(0));
    for (let i = 0; i < item.length; i++) {
        update(board2, item[i]);
    }
    tvInfo3.push(board2);
}

function update(arr1, arr2) {
    let [c, y, x, d] = arr2;
    if (c === '1') {
        if (d === 0) {
            for (let i = x; i < arr1[0].length; i++) {
                if (board[y][i] === '6') break;
                arr1[y][i] = '#';
            }
        }
        else if (d === 1) {
            for (let i = y; i < arr1.length; i++) {
                if (board[i][x] === '6') break;
                arr1[i][x] = '#';
            }
        }
        else if (d === 2) {
            for (let i = x; i >= 0; i--) {
                if (board[y][i] === '6') break;
                arr1[y][i] = '#';
            }
        }
        else if (d === 3) {
            for (let i = y; i >= 0; i--) {
                if (board[i][x] === '6') break;
                arr1[i][x] = '#';
            }
        }
    }
    else if (c === '2') {
        if (d === 0) {
            for (let i = x; i < arr1[0].length; i++) {
                if (board[y][i] === '6') break;
                arr1[y][i] = '#';
            }
            for (let i = x; i >= 0; i--) {
                if (board[y][i] === '6') break;
                arr1[y][i] = '#';
            }
        }
        else if (d === 1) {
            for (let i = y; i < arr1.length; i++) {
                if (board[i][x] === '6') break;
                arr1[i][x] = '#';
            }
            for (let i = y; i >= 0; i--) {
                if (board[i][x] === '6') break;
                arr1[i][x] = '#';
            }
        }
    }
    else if (c === '3') {
        if (d === 0) {
            for (let i = x; i < arr1[0].length; i++) {
                if (board[y][i] === '6') break;
                arr1[y][i] = '#';
            }
            for (let i = y; i < arr1.length; i++) {
                if (board[i][x] === '6') break;
                arr1[i][x] = '#';
            }
        }
        else if (d === 1) {
            for (let i = y; i < arr1.length; i++) {
                if (board[i][x] === '6') break;
                arr1[i][x] = '#';
            }
            for (let i = x; i >= 0; i--) {
                if (board[y][i] === '6') break;
                arr1[y][i] = '#';
            }
        }
        else if (d === 2) {
            for (let i = x; i >= 0; i--) {
                if (board[y][i] === '6') break;
                arr1[y][i] = '#';
            }
            for (let i = y; i >= 0; i--) {
                if (board[i][x] === '6') break;
                arr1[i][x] = '#';
            }
        }
        else if (d === 3) {
            for (let i = y; i >= 0; i--) {
                if (board[i][x] === '6') break;
                arr1[i][x] = '#';
            }
            for (let i = x; i < arr1[0].length; i++) {
                if (board[y][i] === '6') break;
                arr1[y][i] = '#';
            }
        }
    }
    else if (c === '4') {
        if (d === 0) {
            for (let i = x; i < arr1[0].length; i++) {
                if (board[y][i] === '6') break;
                arr1[y][i] = '#';
            }
            for (let i = y; i < arr1.length; i++) {
                if (board[i][x] === '6') break;
                arr1[i][x] = '#';
            }
            for (let i = x; i >= 0; i--) {
                if (board[y][i] === '6') break;
                arr1[y][i] = '#';
            }
        }
        else if (d === 1) {
            for (let i = y; i < arr1.length; i++) {
                if (board[i][x] === '6') break;
                arr1[i][x] = '#';
            }
            for (let i = x; i >= 0; i--) {
                if (board[y][i] === '6') break;
                arr1[y][i] = '#';
            }
            for (let i = y; i >= 0; i--) {
                if (board[i][x] === '6') break;
                arr1[i][x] = '#';
            }
        }
        else if (d === 2) {
            for (let i = x; i >= 0; i--) {
                if (board[y][i] === '6') break;
                arr1[y][i] = '#';
            }
            for (let i = y; i >= 0; i--) {
                if (board[i][x] === '6') break;
                arr1[i][x] = '#';
            }
            for (let i = x; i < arr1[0].length; i++) {
                if (board[y][i] === '6') break;
                arr1[y][i] = '#';
            }
        }
        else if (d === 3) {
            for (let i = y; i >= 0; i--) {
                if (board[i][x] === '6') break;
                arr1[i][x] = '#';
            }
            for (let i = x; i < arr1[0].length; i++) {
                if (board[y][i] === '6') break;
                arr1[y][i] = '#';
            }
            for (let i = y; i < arr1.length; i++) {
                if (board[i][x] === '6') break;
                arr1[i][x] = '#';
            }
        }
    }
    else if (c === '5') {
        for (let i = x; i < arr1[0].length; i++) {
                if (board[y][i] === '6') break;
                arr1[y][i] = '#';
        }
        for (let i = y; i < arr1.length; i++) {
                if (board[i][x] === '6') break;
                arr1[i][x] = '#';
        }
        for (let i = x; i >= 0; i--) {
                if (board[y][i] === '6') break;
                arr1[y][i] = '#';
        }
        for (let i = y; i >= 0; i--) {
                if (board[i][x] === '6') break;
                arr1[i][x] = '#';
        }
    }
}

let min = n * m;
for (let item of tvInfo3) {
    let count = 0;
    for (let i = 0; i < item.length; i++) {
        for (let j = 0; j < item[i].length; j++) {
            if (item[i][j] === 0) count++;
        }
    }
    count = count - walls;
    min = count < min ? count : min;
}

console.log(min);