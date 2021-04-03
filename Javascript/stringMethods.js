var str = "abCDEfghi";
// length of a string
// string also starts with 0 like array
// console.log(str.length);

// find an item; check if an item is present inside a string
// it gives the index if present
// else gives -1
// case sensitive => exact match
// console.log(str.indexOf("a"));
// console.log(str.lastIndexOf("a"));

// extracting parameter
// slice
// var removedItem = str.slice(3, 5);
// console.log(removedItem);
// console.log(str.substring(2, 6));
// console.log(str);

// console.log(str.substr(1,1));

var str1 = "xyz";

var newString = str.replace("abc", "xyz");
console.log(str);
console.log(newString);

str.toLowerCase();
str.toUpperCase();

console.log(str.toUpperCase());
console.log(str.toLowerCase());

