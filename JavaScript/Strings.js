// Single quotes
let strOne = 'Nithish Kumar';
console.log(strOne); // Nithish Kumar1

// Double Quotes
let strTwo = "Nithish";
console.log(strTwo); //Nithish

//Backticks
let strThree = `Nithish`;
console.log(strThree); // Nithish

//multiline using backticks
let strFour = `*Nithish
*Jeyaram
*Haresh`;
console.log(strFour); 

//multiline using quotes
// let strFive = "*Nithish
// *Jeyaram
// *Haresh";
// console.log(strFive);

//Multiline using quotes
let strSix = "Nithish \n Kumar \n k";
console.log(strSix); //Nithish 
                    //kumar
                   //k

console.log('It\'s coding time'); // It's coding time

console.log("It\"s coding time"); // It"s coding time

let strSeven = 'Nithish kumar';
console.log(strSeven[0]); // N
console.log(strSeven[4]); // i
// negative index inside the square bracket gives undefined so (at) a special character is used 
console.log(strSeven[-1]); // undefined

console.log(strSeven.at(-1)); // r
// or
console.log(strSeven[strSeven.length-1]); // r

console.log(strSeven.indexOf('thi'));
// it returns the index starting from 2 that i mentioned below and returns the string except 4th index that i defined 
console.log(strSeven.slice(2,4)); // th

console.log(strSeven.startsWith('Nit')); // true
console.log(strSeven.endsWith('ar')); // true

console.log(strSeven.codePointAt(6)); // 104

console.log(strSeven.includes('kumar')); // true
console.log(strSeven.toUpperCase()); // NITHISH KUMAR
console.log(strSeven.toLowerCase()); // nithish kumar

console.log('banana'.localeCompare('apple')); // 1



