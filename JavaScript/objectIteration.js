let obj = {
    firstName : 'Nithish',
    lastName  : 'Kumar k',
    age : 19,
}

//keys iteration
for (let keys of Object.keys(obj)) {
    console.log(keys);
}

//values iteration
for (let value of Object.values(obj)) {
    console.log(value);
}

//entries
for (let entry of Object.entries(obj)) {
    console.log(entry);
}

let objOne = {
    Apple : 3,
    Banana : 3,
}

let price = Object.fromEntries(
    Object.entries(objOne).map(entry => [entry[0],entry[1]*2])
);

console.log(price.Apple);

