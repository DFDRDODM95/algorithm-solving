  const fs = require("fs");
  let inputData = fs.readFileSync(0, "utf8").toString().split("\n");

  const people = parseInt(inputData.at(0));
  const list = inputData.slice(1);
  let firstCount = new Array(26).fill(0);

  list.forEach((v) => firstCount[v.charCodeAt(0) - "a".charCodeAt(0)]++);

  firstCount = firstCount
    .map((v, idx) => [String.fromCharCode("a".charCodeAt(0) + idx), v])
    .filter((v) => v[1] >= 5);

  const result =
    firstCount.length === 0
      ? "PREDAJA"
      : firstCount.reduce((acc, v) => (acc += v[0]), "");

  console.log(result);