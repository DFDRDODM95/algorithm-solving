const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

let cnt = 0;
input.forEach( (str, outerIdx) => {
    str.split('').forEach( (item, innerIdx) => {
      let alter = (outerIdx % 2);
        if (innerIdx % 2 === alter && item === 'F') cnt++; 
    })
});

console.log(cnt);