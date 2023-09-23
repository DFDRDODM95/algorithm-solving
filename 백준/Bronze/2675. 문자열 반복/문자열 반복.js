const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

  const amount = parseInt(input[0]);

  const inputData = input
    .slice(1, amount + 1)
    .map((layer1) =>
      layer1
        .split(" ")
        .map((layer2, idx) => (idx % 2 == 1 ? layer2 : parseInt(layer2)))
    );

  const answer = inputData.map((layer1) =>
    layer1[1]
      .split("")
      .map((layer2) => layer2.repeat(layer1[0]))
      .join("")
  );

  answer.forEach((v) => console.log(v));