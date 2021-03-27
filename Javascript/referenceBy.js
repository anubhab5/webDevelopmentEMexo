var number_1 = 10;
var number_2;
console.log(number_1);

number_2 = number_1;

console.log(number_2);

number_2 = number_2 + 1;

console.log(number_1);
console.log(number_2);

/////////////////////////////////////////

var arr_1 = [1, 2, 3];
var arr_2;

console.log("Array 1: " + arr_1);
console.log("Array 2: " + arr_2);

arr_2 = arr_1;
console.log("Array 1: " + arr_1);
console.log("Array 2: " + arr_2);

console.log(arr_1[0]);
console.log(arr_2[0]);

arr_2[0] = 99;
console.log("Array 2: " + arr_2);
console.log("Array 1: " + arr_1);
