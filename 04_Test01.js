// Question 1:
// Create a variable of type string and try to add a number to it
console.log("Question 1:");
let str = "Vivek";
let number = 28;
console.log(str+number);



// Question 2:
// Use type of operator to find the data type of the string in last question 
console.log("Question 2:");
console.log(typeof str+number);



// Question 3:
// Create a CONST object in javascript can you change it to hold number later?
console.log("Question 3:");
const obj = {
    name: "Vivek",
    age: 28
};

console.log("Before changing the object:", obj);

obj.age = 29;

console.log("After changing the object:", obj);




// Question 4:
// Try to add a new key to the CONST object in Problem 3, Were you able to do it?
obj.city = "Gaya";
console.log(obj);





// Question 5:
// Write a JS Program to create a word-meaning dictionary 5 words.

console.log("Question 5:");
const dictionary = {
    "apple": "A sweet, edible fruit",
    "banana": "A yellow, edible fruit",
    "orange": "A juicy, sweet fruit",
    "grape": "A small, sweet fruit",
    "kiwi": "A small, sweet fruit"
};

console.log(dictionary);
 