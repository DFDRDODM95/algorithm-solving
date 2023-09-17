const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString();

const isLower = (letter) => letter.charCodeAt(0) >= 'a'.charCodeAt(0) && letter.charCodeAt(0) <= 'z'.charCodeAt(0);
const isUpper = (letter) => letter.charCodeAt(0) >= 'A'.charCodeAt(0) && letter.charCodeAt(0) <= 'Z'.charCodeAt(0);
const isAlpha = (letter) => isLower && isUpper;

const result = [...input].map( v => {
    if (isAlpha(v)) {
        if(isLower(v)) return v.toUpperCase();
        else return v.toLowerCase();
    }
    else {
        return v;
    }
}).join('');

console.log(result);