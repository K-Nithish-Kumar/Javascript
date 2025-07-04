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

let arrThree = ['Apple','Orange','Mango','BlueBerry'];
arrThree.splice(0,2,'Grapes');
console.log(arrThree);



