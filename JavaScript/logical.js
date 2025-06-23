// logical or
alert(true||false); //true
alert(false||true); //true
alert(true||true); //true
alert(false||false); //false

let a = 10;
let b = 20;
console.log(a>b||a<b); //true

let hour = 12;
let isWeekend = true;

if(hour<10||hour>10||isWeekend){
    console.log("office is closed");
}  // office is closed

let firstName = "";
let lastName = "";
let nickName = "";
alert(firstName||lastName||nickName||"Anonymous"); //anonymous

true || alert("hello everyone"); //not printed 
false || alert('hello');  // printed


// && operator
let c = 20;
alert(c < 20 && c >= 20); // false
alert(c <= 20 && c >= 20); //true

alert(true && true); //true
alert(true && false); //false
alert(false && true); //false
alert(false && false); //false

let hourOne = 12;
let minutes = 30;

if(hourOne ==12 && minutes == 30){ //both variables are true so it returns the statement
    console.log('The time is 12:30');
}

let time = (hourOne == 12 && minutes == 30) ? "The time is 12:30" : "incorrect";  //both variables are true so it returns the statement
console.log(time);

// AND returns the first falsy values
console.log(1 && 0);
console.log(null && 1 && 0);
console.log(0 && 1);
// if all the values are truthy then it returns the last value
console.log(1 && 2 && 3);

//! operator
 
let nameOne = "nithish"
console.log(!!nameOne); //true
console.log(!!null); //fals
console.log(!1); //false
console.log(!0); //true