const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const amount = input[0];
const inputData = input.slice(1, amount + 1);

const inputSet = new Set(inputData);
const answer = [...inputSet].sort( (a, b) => {
    if( a.length < b.length ) {
        return -1;
    }
    else if( a.length > b.length ) {
        return 1;
    }
    else {
        const compared = a.localeCompare(b);
        if (compared < 0) {
            return -1;
        }
        else if(compared > 0) {
            return 1;
        }
        else {
            return 0;
        }
    }
});

answer.forEach( v => console.log(v) );