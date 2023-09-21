const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const [ antn, eyes ] = [ +inputData[0], +inputData[1] ];

if ( antn >= 3 && eyes <= 4 ) {
    console.log("TroyMartian");
}
if ( antn <= 6 && eyes >= 2) {
    console.log("VladSaturnian");
}
if ( antn <= 2 && eyes <= 3 ) {
    console.log("GraemeMercurian");
}