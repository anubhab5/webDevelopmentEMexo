var obj = {}; // object literal // object is a collection of name value pair

obj = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  isEligibleToVote: true,
  gender: "male",
  friends: ["Jane", "Don"],
  address: {
    houseNumber: "A101",
    streetName: "",
  },
  getDetail: function () {
    return this.firstName;
  },
  getFirstName: callMeInsideObj
};

function callMeInsideObj() { }
obj.getFirstName();

console.log(obj);
console.log(obj.friends);

for (var counter = 0; counter < obj.friends.length; counter++) {
  console.log(obj.friends[counter]);
}

console.log(obj.address.houseNumber);

var propertyName = "firstName12";

console.log(obj[propertyName]); // [""]
