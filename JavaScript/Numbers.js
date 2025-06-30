//number declarations
let number = 100000000;
console.log(number); // 100000000

let numberOne = 1e8;
console.log(numberOne); // 100000000

let numberTwo = 1e-5;
console.log(numberTwo); // 0.00001

//number methods
//math floor 
let numberThree = 1.25;
console.log(Math.floor(numberThree)); // 1

//math ceil
let numberFour = 1.25;
console.log(Math.ceil(numberFour)); // 2

//math round
let numberFive = 1.25;
console.log(numberFive); // 1
let numberSix = 1.26;
console.log(numberSix); // 2

//math truncate
let numberSeven = 1.265;
console.log(Math.trunc(numberSeven)); // 1

//toFixed
let numberEight = 1.285;
console.log(numberEight.toFixed(1));
console.log(numberFive.toFixed(5)); // 1.25000

//parseInt and parseFloat
let numberNine = '1235px';
console.log(parseInt(numberNine)); //1235

let numberTen = '1.234px';
console.log(parseFloat(numberTen)); // 1.234

//isNAN and isInfinite
let isnumberEleven = 'NAN'
console.log(Boolean(isnumberEleven));
let numberTwelve = 12;
console.log(Boolean(numberTwelve));
alert(isFinite('123'));

//generating random numbers
console.log(Math.random());

//max and min 
console.log(Math.max(3,6,2,4,5)) // 6
console.log(Math.min(2,4,9,8)) // 2

//pow
console.log(Math.pow(2,10)) // 1024


