console.log("In Function ");

var obj = addTwoNumbers(1, 2);
debugger
console.log(obj.sum);

// function defn
function addTwoNumbers(number_1, number_2) {
  // function declaration
  var sum = number_1 + number_2;
  // return sum;
  return {
    sum: number_1 + number_2,
  };
}

// anonymous function
var func = function () {
  console.log(3 + 5);
};

// func();

// HOISTING
// WAY THE VARIABLES AND FUNCTION DEFNS ARE PULLED UP B4 EXECUTION
