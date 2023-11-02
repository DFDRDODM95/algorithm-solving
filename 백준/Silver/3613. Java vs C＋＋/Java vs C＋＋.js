const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();

let result = "Error!";
if (input.includes('_')) {
    let arr1 = input.split('_');
    if (arr1.includes('')) {
        result = "Error!";
    }
    else {
        if ([...input].some(v => isUpper(v))) {
            result = "Error!";
        }
        else {
            result = arr1.map( (v, idx) => idx > 0 ? v[0].toUpperCase() + v.slice(1) : v).join('');
        }
    }
}
else if ([...input].some(v => isUpper(v))) {
    if (isUpper(input.charAt(0))) {
        result = "Error!";
    }
    else {
        let [s, e] = [0, 1];
        let arr2 = [];
        for (let i = 0; i < input.length; i++) {
            if (isUpper(input.charAt(i))) {
                e = i;
                arr2.push(input.slice(s, e));
                s = i;
            }
            if (i === input.length - 1) {
                arr2.push(input.slice(s));
            }
        }
        result = arr2.join('_').toLowerCase();
    }
}
else {
    result = input;
}

console.log(result);

function isUpper(letter) {
    if (letter.charCodeAt(0) >= 'A'.charCodeAt(0) && letter.charCodeAt(0) <= 'Z'.charCodeAt(0)) return true;
    return false;
}