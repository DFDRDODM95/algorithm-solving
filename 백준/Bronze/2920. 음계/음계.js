const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split(' ').map( v => parseInt(v) );
  let ascending = true;
  for (let i = 0; i < input.length - 1; i++) {
    ascending = ascending && ( input[i] <= input[i + 1] );
  }

  let descending = true;
  if (ascending === false) {
    for (let i = 0; i < input.length - 1; i++) {
      descending = descending && ( input[i] >= input[i + 1] );
    }
  }

  if (ascending === true) {
    console.log("ascending");
  } else if (descending === true) {
    console.log("descending");
  } else {
    console.log("mixed");
  }