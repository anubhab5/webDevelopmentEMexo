var myName = "Jack";
var counter = 0;

function add2Nums() {
  var counter = 1;
  console.log("inside function " + counter); // 1
  counter = counter + 1; // 2
  console.log("inside function " + counter); // 2

  console.log("inside function " + myName);
}

add2Nums();
console.log(counter); // 0

// global, function
