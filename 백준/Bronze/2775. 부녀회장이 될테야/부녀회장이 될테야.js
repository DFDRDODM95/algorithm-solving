const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
  const amount = parseInt(input[0]) * 2;
  const inputData = input
    .slice(1, amount + 1)
    .map((v) => parseInt(v));
  
  let twoDim = [];
  for (let i = 0; i < inputData.length; i += 2) {
    const temp = inputData.slice(i, i + 2);
    twoDim.push(temp);
  }

  twoDim.forEach((v) => solution(v[0], v[1]));

  function solution(k, n) {
    let apt = new Array(k + 1);
    apt[0] = new Array(n).fill(1).map((v, idx) => v + idx);

    for (let i = 1; i < apt.length; i++) {
      apt[i] = apt[i - 1].map((v, idx, arr) =>
        arr.slice(0, idx + 1).reduce((acc, v) => (acc += v), 0)
      );
    }
    console.log(apt[k][n - 1]);
  }