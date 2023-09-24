const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const amount = parseInt(input[0]);
const inputData = input.slice(1, amount + 1).map(innerArr => innerArr.split(' ').map( item => parseInt(item)));
for(let innerArr of inputData) {
    const [h, w, n] = innerArr; 
    const pref = n % h === 0 ? h : n % h; 
    const postf = Math.ceil(n / h); 

    const filler = postf >= 10 ? '' : '0';
    console.log([pref, postf].join(filler));
}