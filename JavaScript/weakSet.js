//weakSet initialization
let weakSet = new WeakSet();

let obj =  {
    name:'Nithish',
    age:19,
};

let result = weakSet.add(obj);
console.log(result);

let objOne = {
    name : 'Jeyaram',
    age:15,
}

weakSet.add(objOne);
console.log(weakSet);

console.log(weakSet.has(objOne));
weakSet.delete(obj);

console.log(weakSet);
