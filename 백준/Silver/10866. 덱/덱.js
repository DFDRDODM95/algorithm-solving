const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const n = parseInt(inputData[0]);
const tc = inputData.slice(1, n + 1).map(str => str.split(' '));

let arr = new Array(n * 2).fill(0);
let [front, rear] = [n, n];
let rst = '';
let op = {
    "push_front" : (x) => {arr[--front] = x;},
    "push_back" : (x) => {arr[rear++] = x;},
    "pop_front" : () => {rst += rear - front === 0 ? -1 : arr[front++]; rst += '\n'; 
    if (rear - front === 0) [front, rear] = [n, n]; },
    "pop_back" : () => {rst += rear - front === 0 ? -1 : arr[--rear]; rst += '\n';
    if (rear - front === 0) [front, rear] = [n, n]; },
    "size" : () => {rst += rear - front + '\n';},
    "empty" : () => {rst += (rear - front) === 0 ? 1 : 0; rst += '\n';},
    "front" : () => {rst += (rear - front) === 0 ? -1 : arr[front]; rst += '\n';},
    "back" : () => {rst += (rear - front) === 0 ? -1 : arr[rear - 1]; rst += '\n';}
}

tc.forEach( v => v.length > 1 ? op[v[0]](v[1]) : op[v[0]]());
console.log(rst);