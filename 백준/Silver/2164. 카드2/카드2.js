const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const inputData = parseInt(input);

let arr = new Array(inputData).fill(1).map( (v, idx) => v + idx );
let [fr, re] = [0, inputData - 1];
let cnt = 0;
while( re - fr + 1  > 1 ) {
    if (cnt % 2 === 0) {
        fr++;
    }
    else {
        arr.push(arr[fr]);
        fr++;
        re++;
    }
    cnt++;
}

console.log(arr[fr]);