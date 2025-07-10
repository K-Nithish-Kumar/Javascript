// Array declarations
let  arr = new Array('Apple','Banana','Orange');
console.log(arr);

let arrOne = ['Apple','Banana','Orange'];
console.log(arrOne);

//pop occurs at the end and remove from the end
console.log(arrOne.pop());

console.log(arrOne);

//push occurs at the end and append a new element at the end
arrOne.push('Orange');
console.log(arrOne);

//shift occurs at the beginning and remove the element from the beginning
arrOne.shift();
console.log(arrOne);

//unshift occurs at the beginning and append the element at the beginninhg
arrOne.unshift('Apple');
console.log(arrOne);

let arrTwo = ['Apple','Banana','Cocunut','BlueBerry'];
for (let i = 0; i < arrTwo.length; i++){
    console.log(arrTwo[i]);
}

for ( let fruit of arrTwo){
    console.log(fruit);
}

for (let fruit in arrTwo){
    console.log(arrTwo[fruit]);
}

// Array methods 
//Splice method
let arrThree = ['Apple','Orange','Mango','BlueBerry'];
arrThree.splice(0,2,'Grapes');
console.log(arrThree);

//Slice Method
let arrFour = ['Apple','Orange','Mango','BlueBerry'];
console.log(arrFour.slice(0,3));
console.log(arrFour);

//Concat
let arrFive = [1,2];
console.log(arrFive.concat(3,4));

//object-like array
let obOne = {
    0:'something',
    1:'else',
    length:2,
}

console.log(arrFive.concat(obOne))

// To access the object-like array as an array Symbol.isConcateSpreadable is used
let obTwo = {
    0:'something',
    1:'else',
    [Symbol.isConcatSpreadable] : true,
    length:2,
}

console.log(arrFive.concat(obTwo));

//forEach
['Apple','Orange','Grapes'].forEach(console.log);
// ['Apple','Orange','Grapes'].forEach(alert);

//indexOf and includes
//indexOf returns the index if the element found else it returns -1
let arrSix = ['Nithish','Jeyaram','Haresh','Hari','Nithish'];
console.log(arrSix.indexOf('Nithish'));
console.log(arrSix.indexOf('Nithish',1));

//includes returns true if the index is found else it returns false
console.log(arrSix.includes('Hari'));
console.log(arrSix.includes('Dinesh'));

//lastIndexOf
//it returns the last occurence of element 
console.log(arrSix.lastIndexOf('Nithish'));

//find/findIndexOf/findlastIndexOf - these methods handles the object
let users = [
    {id: 1, userName:'Nithish'},
    {id: 2, userName:'Jeyaram'},
    {id: 3, userName:'Haresh'},
];

let user = users.find(items => items.id == 1);
console.log(user.userName);

console.log(users.find(items => items.id ==2));

//findIndexOf
console.log(users.findIndex(user => user.userName == 'Jeyaram'));

//findLastIndexOf
console.log(users.findLastIndex(user => user.userName == 'Nithish'));

//filter and Map
let arrSeven = ['Nithish','Jeyaram','Haresh']
console.log(arrSeven.filter(items => items.idx < 2));

let arrEight = ['Apple','Orange','Grapes'];
console.log(arrEight.map(item => item.length));

//sort
let arrNine = [1,15,2];
console.log(arrNine.sort()); // 1,15,2 -> here this sort method converts the elem to string then compare in that wise 2 > 15

function sortMethod(a,b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

console.log(arrNine.sort(sortMethod));  // 1,2,15

//reverse
let arrTen = [1,2,3,4,5,6,7];
console.log(arrTen.reverse());

let str = 'Nithish,Jeyaram,Haresh';
let strOne = str.split(', ',2);
for(let name of strOne){
    alert(`a message to ${name}`);
}


let arrEleven = ['Nithish','Jeyaram','Haresh'];
let strTwo = arrEleven.join(';');
console.log(strTwo);

//reduce
let arrTwelve = [1,2,3,4,5];
let result = arrTwelve.reduce((sum,current) => sum + current,0);
console.log(result);

let arrThirteen = [1,2,3,4,5];
let resultOne = arrThirteen.reduce((sum,current) => sum * current,1);
console.log(resultOne);

//redueRight
let arrFourteen = [1,2,3,4,5];
let resultTwo = arrFourteen.reduceRight((sum,current) => sum + current,0);
console.log(resultTwo);

console.log(typeof([]));
console.log(typeof({}));

//isArray method
console.log(Array.isArray({}));
console.log(Array.isArray([]));

//thisArg
let army = {
    minAge:18,
    maxAge:27,
    canJoin(user){
        return user.age >= this.minAge && user.age < this.maxAge;
    }
}

let userOne = [
    {age:16},
    {age:20},
    {age:23},
    {age:30}
];

let soldiers = userOne.filter(army.canJoin,army);

console.log(soldiers.length);
console.log(soldiers[0].age);
console.log(soldiers[1].age);









