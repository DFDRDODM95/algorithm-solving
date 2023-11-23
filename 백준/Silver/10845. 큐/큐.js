const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = input.split('\n');
const amount = parseInt(inputData[0]);
const tc = inputData.slice(1, amount + 1).map(str => str.split(' '));

let arr = new Array(amount).fill(0);
let [front, rear] = [0, 0];
let rst = '';
let op = {
    "push" : (x) => {arr[rear++] = x;},
    "pop" : () => {rst += rear - front === 0 ? -1 : arr[front++]; rst += '\n'; 
    if (rear - front === 0) [front, rear] = [0, 0]; },
    "size" : () => {rst += rear - front + '\n';},
    "empty" : () => {rst += (rear - front) === 0 ? 1 : 0; rst += '\n';},
    "front" : () => {rst += (rear - front) === 0 ? -1 : arr[front]; rst += '\n';},
    "back" : () => {rst += (rear - front) === 0 ? -1 : arr[rear - 1]; rst += '\n';}
}

tc.forEach( v => v.length > 1 ? op[v[0]](v[1]) : op[v[0]]());
console.log(rst);