// There are 7 Types of Primitive Data Types
// NN SS BB U

let a = null;
let b = 28;
let c = Symbol("I am a Symbol");
let d = "Vivek";
let e = true;
let f = BigInt("587"+"03");
let g = undefined;

console.log(typeof a); // object (null is an object in JavaScript)
console.log(typeof b); // number
console.log(typeof c); // symbol
console.log(typeof d); // string
console.log(typeof e); // boolean
console.log(typeof f); // bigint
console.log(typeof g); // undefined


// Object in JS 
// Objects are NOT primitive
// Objects are used for mapping the Key and Value
let obj = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(obj); // object
console.log(obj["age"]);