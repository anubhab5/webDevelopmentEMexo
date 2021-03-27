var months = ["Jan", "Feb", "Mar", "Apr", "May"];

// for while do-while

// i is counter
for (var i = 0; i < months.length; i++) {
  console.log(months[i]);
}

var counter = 10;
// while (counter < 5) {
//     // do some stuff
//     console.log(counter);
//     counter = counter + 1;
// }

do {
  console.log(counter);
  counter = counter + 1;
} while (counter < 5);
