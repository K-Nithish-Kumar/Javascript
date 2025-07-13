//weakMap declaration
let weakMap = new WeakMap();

//weakMap have object as the key
let obj = {};
let one;
weakMap.set(obj,'Nithish');
// weakMap.set(obj,11231038);
// weakMap.set(one,'Nithish'); //uncaught TypeError: Invalid value used as weak map key

console.log(weakMap);

let objOne = {};
weakMap.set(objOne,11231038)

console.log(weakMap);

let objThree = {};
weakMap.set(objThree,'Age : 28');

console.log(weakMap);

let hasValue = weakMap.has(objOne);
console.log(hasValue);

let getValue = weakMap.get(objOne);
console.log(getValue);

let delValue = weakMap.delete(objThree);
console.log(delValue);



