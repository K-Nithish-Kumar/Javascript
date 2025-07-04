// unary operators
let x = 1;
x = -x;
console.log(x);
let y = -1;
y = -y;
console.log(y);

// binary operators
let num1 = 10,
num2 = 20,
num3 = num1 - num2;
console.log(num3);

// remainder
console.log(5 % 2);
console.log(5 % 10);

// exponention
console.log(2**4);
console.log(3**3);

// string concatenation with binnary operator +
let apple = '3';
let banana = '4';
console.log(apple + banana);

let appleOne = '4';
let bananaOne = 5;
console.log(appleOne + bananaOne);


// numeric conversion,unary +
let number1 = 1;
console.log(+number1)
let number2 = -2;
console.log(+number2);
let number3 = -1;
console.log(-number3);
let one = "true"
console.log(+true);
let two = "";
console.log(+two);

// assignment
let sum = 2 + 4 * 2;
console.log(sum);

let a = 1;
let b = 2;
console.log(a+b);
let c = 3 - (a = b + 1);
console.log(c);

// chaining Assignment
let o = p = q = 2 + 2;
console.log(o);
console.log(p);
console.log(q);

//modify in place 
let n = 2;
n = n + 3;
console.log(n);

let nOne = 3;
nOne += 2;
console.log(nOne);

let nTwo = 4;
nTwo *= 2;
console.log(nTwo);

let nThree = 4;
nThree += 3 * 5;
console.log(nThree);

// Increment/decrement
let counter = 2;
counter++;
console.log(counter);

let counterOne = 4;
counterOne--;
console.log(counterOne);

// this increment and decrement can be applicable for only variables

let counterTwo = 2;
let ab = ++counterTwo;
console.log(counterTwo);

let counterThree = 3;
let cd = counterThree++;
console.log(cd);






