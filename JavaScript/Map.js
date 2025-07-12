//map declaration
let map = new Map();

//set method
map.set(1,'Nithish');
map.set(2,'kumar');
map.set(3,'jeyaram');

console.log(map);

//get method
let mapOne = map.get(1);
console.log(mapOne);

//has method
let mapTwo = map.has(1);
console.log(mapTwo);

//delete method
let mapThree = map.delete(2);
console.log(mapThree);
console.log(map);

//size method
console.log(map.size);

//clear method
let mapFour = map.clear();
console.log(map);

let mapFive = new Map();
mapFive.set(1,'Nithish');
mapFive.set(2,'Kumar');
mapFive.set(3,'Jeyaram');

//Iterate over map
//keys()
for(let name of mapFive.keys()) {
    console.log(name); // 1 2 3
}

//values()
for(let name of mapFive.values()) {
    console.log(name); // Nithish Kumar Jeyaram
}

//entries()
for(let name of mapFive.entries()) {
    console.log(name);
}

//object.entries
let obj = {
    name:'Nithish',
    rollNo:11231038
}

let mapSix = new Map(Object.entries(obj));
console.log(mapSix);

let mapSeven = Object.fromEntries([
    [1,'Hello'],
    [2,'world'],
])

console.log(mapSeven);

//set 
let set = new Set();

//add method
set.add(1,'Nithish');
set.add(2,'Kumar');
set.add(3,'Jeyaram');

console.log(set);

//delete method
let setOne = set.delete(1);
console.log(setOne);

//has method
let strTwo = set.has(2);
console.log(strTwo);

//size method
let strThree = set.size;
console.log(strThree);

//clear method
let strFour = set.clear();
console.log(strFour);

let setTwo = new Set([
    [1,'hello'],
    [2,'world']
])

//set.keys()
for(let values of setTwo.keys()) {
    console.log(values);
}

for (let value of setTwo.values()) {
    console.log(value);
}