// javaScript allow the Variable to change at the Run Time 


/*
Const is Used for Constant
Can not be Re-Declare and not Update


Let is used for Block Scoped variable
Can not be Re-Declare but can be Update

var is Globally Scoped Variable
can be Re-declare and Update

*/

const PI = 3.14;
// const PI = 07;  Can not be Re-Declare
// PI = 12;  Can not be Update
console.log(PI); // output 3.14

let x = 10;
// let x = 23; Can not be Re-Declare
x = 23; //  Can be Update
console.log(x); // output 23

var y = 10;
console.log(y); // output
y = 23; //Can be Re-Declare and Update
console.log(y); // output