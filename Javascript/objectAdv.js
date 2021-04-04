// create object using the object literal {}
// var obj = {};
// console.log(obj);

// create object using the keyword new
// var obj = new Object();
// Object.defineProperty(obj, "x", {
//   value: 10,
//   writable: true,
// });
// console.log(obj);

// p1 = {
//     name: "Jack",
//     age: 20
// }

// Objects are also created using function. In that case he particular
// function is called a constructor and the way of creating object is called
// creating object using  function constructor
// this keyword -  this will be set to the object who calls it/ creates it/ modifies it

// function Person(name, age) {
//   this.name = name;  //  this refers to p1 // p1.name
//   this.age = age;
//   this.getDetail = function() {
//       console.log("Person Name " + this.name);
//       console.log("Person Age " + this.age);
//   }
// }

// var p1 = new Person("jack", 22); // p1 is getting created
// var p2 = new Person("Jill", 20);

// p1.getDetail(); // p1 is the owner
// console.log(p2);
// p2.getDetail(); // p2 is the owner

// var obj = {
//   name: "jack",
//   age: 20,
//   getDetails: function () {
//     console.log("Name is: " + this.name);
//     console.log("Age is: " + this.age);
//   },
// };

// var obj1 = {
//     name: "Jill",
//     age: 22,
//     getDetails: function () {
//       console.log("Name is: " + this.name);
//       console.log("Age is: " + this.age);
//     },
//   };
  

// obj.getDetails();
// obj1.getDetails();
