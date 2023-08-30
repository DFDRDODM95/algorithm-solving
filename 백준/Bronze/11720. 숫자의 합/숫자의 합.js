  const fs = require("fs");
  const inputData = fs.readFileSync(0, "utf8").toString().split("\n");

  const amount = inputData[0];
  const result = inputData[1]
    .split("")
    .slice(0, amount)
    .reduce((acc, v) => (acc += parseInt(v)), 0);

  console.log(result);