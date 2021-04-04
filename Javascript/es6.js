// let const
// arrow function
// class
// ...
// for-of
// Number properties
// Math methods

//// ES6 FEATURES
// var firstName = "jack"; //

// block { }
// let lastName = "dane";
// const PI; // not allowed : a variable declared using const keyword must be initialized at the time
// of defn.
// PI = 3.4;
// PI = 3.14; not allowed
// PI = 4; not allowed
// const PI = 3.14;
// if (true) {
//   //   console.log(firstName);
//   var firstName = "Jill";
//   let firstName = "Jane";
//   //   console.log(PI); : not allwed
//   const PI = 4;
//   console.log(PI);
//   let FirstName = "Jack";
//   firstName = "Jack";
//   console.log(firstName);
// }
// console.log(firstName);

// arrow function / fat arrow

// const getDetail = function (numb_1) {}; // anonymous function
// getDetail(12);

// const anotherGetDetail = (num1, num2) => {
//   let sum = num1 + num2;
//   //   console.log("Hello to fat arrow " + num1, num2);
//   return sum;
// };
// = >

/*
    1.  defined by =>
    2. if you do not have a parameter then () is mandate
    3. more than one para () is mandate
    4. one parameter () is optional
    5. one statement {} is optional
    6. more than 1 st {} mandatory
    7. 1 stmnt return keyword is optional
    8. more than 1 stmnt return keyword is mandate
*/
// const anotherGetDetail = (num1, num2) => num1 + num2;
// console.log(anotherGetDetail(11, 12));

// ES6 class
// class Person {
//   name;
//   age;
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getDetail = () => {};
// }

// const p1 = new Person("Jack", 20);
// console.log(p1);

// rest and spread operator ...
// let arr = [1, 2, 3, 4];
// // spread op
// console.log(...arr);
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

// // rest operators
// function callMe(...num) {
//   console.log(num);
// }

// console.log(callMe(1, 2, ));

// for-of
// let arr = [1, 2, 3, 4, 5];
// for (let i of arr) {
//   console.log(i);
// }
