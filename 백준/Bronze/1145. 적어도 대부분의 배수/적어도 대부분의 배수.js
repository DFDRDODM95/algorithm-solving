const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split(' ');
const inputData = input.map(v =>parseInt(v));

const Factorial = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) result *= i;
    return result;
}

const [n, r] = [5, 3];
const size = Factorial(n) / Factorial(r) / Factorial(n-r);
let comArr = new Array(size).fill(-1);

let idx = 0;
for (let i = 0; i < 5 - 2; i++) {
    for (let j = i + 1; j < 5 - 1; j++) {
        for (let k = j + 1; k < 5; k++) {
            comArr[idx++] = [inputData[i], inputData[j], inputData[k]];
        }
    }
}

function get2LCM(a, b) {
    let r = -1;
    for(var ab= a*b;r = a % b;a = b, b = r){}
    return ab/b;
}

function get3LCM(a, b, c) {
    return get2LCM( get2LCM(a, b), c );
}

const LCMs = comArr.map( v => get3LCM(v[0], v[1], v[2]) );
let minLCM = LCMs[0];
LCMs.forEach( v => minLCM = minLCM < v ? minLCM : v );
console.log(minLCM);