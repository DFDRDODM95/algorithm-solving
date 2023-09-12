const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n').map( v => v.split(' '));

const fee = inputData[0].map( v => parseInt(v));
inputData.splice(0, 1);
const orj = inputData.map( v => [ parseInt(v[0]), parseInt(v[1]) ]);

let ser = orj.reduce( (acc, cur) => acc.concat(cur), []).sort( (a, b) => a - b );

let tfm = [];
for (let i = 0; i < ser.length - 1; i++) {
    let sub = ser.slice(i, i + 2);
    sub.push(0);
    tfm.push(sub);
}

for (let i = 0; i < tfm.length; i++) {
    for (let j = 0; j < orj.length; j++) {

        if (tfm[i][0] >= orj[j][0] && tfm[i][1] <= orj[j][1]) {
            tfm[i][2]++;
        }
    }
}

let sum = 0;
for (let item of tfm) {
    switch(item[2]) {
        case 1 :
            sum += ( item[1] - item [0] ) * fee[0];
            break;
        case 2 :
            sum += ( item[1] - item [0] ) * fee[1] * 2;
            break;
        case 3 :
            sum += ( item[1] - item [0] ) * fee[2] * 3;
            break;
    }
}

console.log(sum);