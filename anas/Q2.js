// Question 2: From the same users array, return only users with id > 1.

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const newArray=users.filter(user=>user.id>1)
console.log(newArray)