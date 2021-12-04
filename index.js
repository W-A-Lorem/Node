const colors = require('colors');

const a = +process.argv[2];
const b = +process.argv[3];
const array = [colors.green, colors.yellow, colors.red];
var j = 0;

if (Number.isInteger(a) & Number.isInteger(b)) {
for (var i = a; i <= b; i++) {
    console.log(array[j](i));
    if(j<2) {
        j = j+1;
    } else if (j = 2) {
        j = 0;
    }
};
}else {
    console.log('numbers should be Integer')
};
