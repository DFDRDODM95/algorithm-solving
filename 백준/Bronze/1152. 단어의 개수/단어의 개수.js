const input = require('fs').readFileSync('/dev/stdin').toString()

words = input.trim().split(' ');
if(words[0] == ""){
    words.pop();
}    
console.log(words.length);