const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split('\n');

const [size, k] = input[0].split(' ').map(v => parseInt(v));
const list = input.slice(1, size + 1);
const question = input.slice(-k);

let answer = {};
for (let [key, value] of list.entries()) {
    answer[key + 1] = value;
    answer[value] = key + 1;
}

question.forEach(v => {
  console.log(answer[v]);
});