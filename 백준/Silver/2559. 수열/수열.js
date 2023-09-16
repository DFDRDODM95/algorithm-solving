const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .split("\n")
  .map((v) => v.split(" ").map((v2) => parseInt(v2)));

const [amount, k] = inputData[0];
const list = inputData[1];

let arr = [];
for (let i = 0; i <= list.length - k; i++) {
  let sum = 0;
  for (let j = 0; j < k; j++) {
    sum += list[i + j];
  }
  arr.push(sum);
}

arr.sort((a, b) => b - a);
console.log(arr.at(0));