// var arr;
// arr = ["John", 21, true];

// // array is 0 index based ::: 0
// console.log(arr);
// debugger;
// var marks = 10;
// if (marks > 9) {
//   // insert an item at the end in the array ::: push
//   arr.push("testing");
//   arr.push("testing 1");
//   arr.pop();
// }
// console.log(arr.length);
// console.log("arr[2]:::: " + arr[2]);
// console.log("arr[5]:::: "+ arr[5])

// // pop : remove an item from the end of the array
// var poppedOutItem = arr.pop();

// var friendList = ["John", "Jane", "Don", "Dean", "Jack"];
// console.log(friendList);

// // shift: Remove an item from the beginning of the array
// var xyz = friendList.shift();
// console.log(xyz);

// console.log(friendList);

// // unshift : add a particular item at the beginning of the array
// friendList.unshift("jill");
// console.log(friendList)

// splice ::: addition aswell removeal of items from an array
// remove arr.splice(staringIndex, numberOfItemsToBeRemoved);
// adding arr.splice(staringIndex, 0, <values to be added separated by comma>);
// removal and addition : arr.splice(startingIndex, numberOfItemsToBeRemoved, <values to be added separated by comma>);
// Original array is getting modified.
// var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numberList);
// numberList.splice(3, 2, 2.1, 2.2, 2.3);
// console.log(numberList);

// slice : used ONLY to remove elementsfrom array
// syntax( startIndex, endIndex) ::: endIndex is not taken 1 less than the endIndex
// the original array is not modified, is kept intact
// the removed items are/ can be extracted and stored inside a variable
// var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var returnedValues = numberList.slice(3, 5);
// console.log(returnedValues);
// console.log(numberList);

// // Merging of arrays
// var arr_1 = [1, 2, 3];
// var arr_2 = [5, 6, 7];
// var arr_3 = [7, 8, 9];

// console.log(arr_1);
// console.log(arr_2);
// // merge 2 arrays
// var newConcatenatedArray = arr_1.concat(arr_2);

// // merge n arrays
// var newConcatenatedArray = arr_1.concat(arr_2, arr_3);

// console.log(arr_1);
// console.log(arr_2);
// console.log(newConcatenatedArray);
// var arr = [1, 2, 3];
// console.log(arr);
// console.log(arr.toString());

// var arr = [2, 3, 4, 5];
// console.log(Math.max(...arr)); // ...
// console.log(Math.max(1,2,3,4,5));
// console.log(Math.min(1,2,3,4,5));
