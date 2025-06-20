//function declaration
function showHelloNithish () {
    console.log("hello nithish");
}
showHelloNithish(); // hello nithish

//if the variable is declared but its value didn't means it returns undefined
let message;
function showMessage (message) {
    console.log(message);
}

showMessage(); //undefined
showMessage(); //undefined
showMessage(10); //10

//addition of two numbers 
function getSum(a,b){
    return a+b;
}

console.log(getSum(1,4)); //5

function getSumOne () {
    let a =10;
    let b =10;
    return a+b;
}

console.log(getSumOne()); //20

//checkage function

function checkAge(age){
    if(age >= 18){
        return('eligible');
    }
    else{
        return('did parents allow you?')
    }
}
console.log(checkAge(1)); //did parents allows you

//prime

function showPrime (n) {
    nextPrime:for(let i=2;i<n;i++){
        for(let j=2;j<i;j++){
            if(i % j ==0 ){
                continue nextPrime;
            }
        }
        console.log(i);
    }

}

showPrime(10); // 2 3 5 7

//outer variable
let userName = 'Nithish';
function greetings(){
let greet = 'hello' + userName;
console.log(greet);
}


greetings(); // hello Nithish

//local variable
function showMessageOne(){
    let message = 'hello it`s me';
    console.log(message);
}

showMessageOne(); //hello it`s me

function getAddOne () {
    let a = 10;
    let b =20;
    let c = a+b;
    console.log(c);
}
getAddOne(); // 30

function getAddTwo (a,b) {
    return a+b;

}

console.log(getAddTwo(10,20)); //30
//function to find minimum
function min(a,b){
    if(a<b){
        return a;
    }
    else{
        return b;
    }
}

console.log(min(2,5)); // 2
console.log(min(3,-1)); // -1
console.log(min(1,1)); // 1

//function for power
function pow(x,n){
    let result = x;
    for(i=1;i<n;i++){
        result *= x;
    }
    return result;
}

console.log(pow(3,2)); // 9
console.log(pow(3,3)); // 27
console.log(pow(1,100)) // 1

//function expression 
let sayhi = function(){
    console.log('hello');
}
sayhi(); //hello

//function declaration is accesed only inside the block  but function expression can be accessed from the 
// outside of the block
//function declaration
let age = prompt('whats your age',18);
if(age < 18){
    welcome(); // age is < 18 it prints 'hello'
    function welcome() {
        alert('hello');
    }
}
else {
    welcome(); // else it prints 'hello one'
    function welcome() {
        alert('hello one');
    }
}
// welcome(); // error it's not defined because this declaration only access the function inside the loop

//function expression
let ageOne = prompt('whats your age',18);
let welcome;
if(ageOne < 18){
    welcome = function () {
        console.log('hello world');
    }
}
else {
    welcome = function () {
        console.log('hello one');
    }
}

welcome(); // age is less than 18 it prints hello world else it prints 'hello one '

//we cant access the function expression before initializing the function
// sayhello(); // cant access sayhello() before initialization but function declaration can do this
let sayhello = function () {
    console.log('its javascript');
};

sayhelloOne(); // function declaration can be accessed  from anywhere // 'hey bro!!!'
function sayhelloOne () {
    console.log('hey bro!!!')
}

//arrowFunctions
let ask = (question, yes , no) => {
    if(confirm(question)){
        yes();
    } else {
        no();
    }
}

ask(
    "Do you agree?",
     () => {console.log('you agreed');}, // if i click ok it returns this statement
     () => {console.log('you cancelled the execution');} // if i click cancel it returns this statement
);





