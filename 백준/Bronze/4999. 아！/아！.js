const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().split('\n');

const [ans, rq] = input;

const result = ans.length >= rq.length ? "go" : "no";

console.log(result);