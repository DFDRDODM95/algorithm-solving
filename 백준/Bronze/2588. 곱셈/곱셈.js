const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

  const A = parseInt(input[0]);
  const B = input[1].split("").map((v) => parseInt(v));

  const cal = Array(input[1].length)
    .fill(0)
    .map((v, idx) => A * B[idx]);

let answer = cal.slice().reverse();

const sumCal = cal
    .map((v, idx, array) => v * Math.pow(10, array.length - (idx + 1)))
    .reduce((acc, v) => (acc += v), 0);
  answer.push(sumCal);

  answer.forEach((v) => console.log(v));