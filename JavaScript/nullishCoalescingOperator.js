//nullishCoalescingOperator (??) it is used to find the first defined values
let a = 10;
let b = 20;
console.log(a ?? b); // 10

// if all the values are null/undefined it returns the last value
let c = null;
let d = undefined;
let e = null;
console.log(c ?? d ?? e); // null

//comparison between ?? and ||
let height = 0;
console.log(height || "Anonymous"); // Anonymous because first value is the truthy values
console.log(height ?? "Anonymous"); // 0 because height has a value

// let heightOne = 1 && 2 ? 4;
// console.log(heightOne); // uncaught syntax error because we have to use paranthesis here

let heightOne = (1 && 2) ?? 4;
console.log(heightOne); // 2