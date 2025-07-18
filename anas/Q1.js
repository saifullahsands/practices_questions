// Question 1: You have an array of user objects. Return an array of usernames.

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const newArray=users.map((user)=>user.name)

console.log(newArray)

//  Output: ["Alice", "Bob"]