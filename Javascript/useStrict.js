"use strict";
// you cannot create a variable without the keyword var
// var myName = "John 123";
// console.log(myName);

// ("use strict");
// Same  name as parameters cannot be used in a function
// You can put a use strict from any point of your javascript file
// function callMe(val1, val2) {
//   console.log(val1);
//   console.log(val2);
// }

// callMe(1, 2);

// Octal values are not allowed in strict mode.
// A octal number/ value starts with 0 and appended with some other digits.
// var myMarks = 12; // 012
// console.log(myMarks);

// a variable should not be deleted using the keyword delete
// var firstName = "John";
// console.log(firstName);
// delete firstName;
// console.log(firstName);

// Below example is legit and will not throw any error
// deletion of property in an object is allowed using keyword delete
// var obj = {
//     name: "Jack",
//     age : 20,
//     marks: 70
// };
// console.log(obj);
// delete obj.name;
// console.log(obj);


// cannot update a read-only property of an object
// var obj = {
//   name: "jack"
// };
// console.log(obj);
// Object.defineProperty(obj, "age", {
//     value: 20,
//     writable: false,
// });
// console.log(obj);

// obj.age  = 21;
// console.log(obj);


