  const fs = require("fs");
  const inputData = fs.readFileSync(0, "utf8").toString();

  const [lStart, lEnd] = ["a".charCodeAt(0), "z".charCodeAt(0)];
  const [uStart, uEnd] = ["A".charCodeAt(0), "Z".charCodeAt(0)];

  const isLower = (letter) =>
    letter.charCodeAt(0) >= lStart && letter.charCodeAt(0) <= lEnd;
  const isUpper = (letter) =>
    letter.charCodeAt(0) >= uStart && letter.charCodeAt(0) <= uEnd;
  const isAlpha = (letter) => isLower(letter) || isUpper(letter);

  const lowers = new Array(26)
    .fill(lStart)
    .map((v, idx) => String.fromCharCode(v + idx));
  const uppers = new Array(26)
    .fill(uStart)
    .map((v, idx) => String.fromCharCode(v + idx));

  const rot13 = (letter) => {
    let idx = 0;
    if (isAlpha(letter)) {
      if (isLower(letter)) {
        idx = (letter.charCodeAt(0) - lStart + 13) % 26;
        return lowers[idx];
      } else {
        idx = (letter.charCodeAt(0) - uStart + 13) % 26;
        return uppers[idx];
      }
    } else {
      return letter;
    }
  };

  const result = [...inputData].map((v) => rot13(v)).join("");

  console.log(result);