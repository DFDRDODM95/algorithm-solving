  const fs = require("fs");
  const inputData = fs.readFileSync(0, "utf8").toString().trim().split('\n');

  const amount = parseInt(inputData[0]);
  const [sw, ew] = inputData[1].split("*");
  const list = inputData.slice(2);

  const isMatch = (word) => {
    if (sw.length + ew.length > word.length) return false;
    if (word.slice(0, sw.length) === sw) {
      if (word.slice(-1 * ew.length) === ew) {
        return true;
      }
    }
    return false;
  };

  list.forEach((item) => {
    console.log(isMatch(item, sw, ew) ? "DA" : "NE");
  });