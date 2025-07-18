// Question 3:Update the status of all users to "active" without mutating original array.


const users = [
  { id: 1, name: "Alice", status: "inactive" },
  { id: 2, name: "Bob", status: "inactive" },
];

const newArray=users.map((user)=>({
    ...user,
    status:"active"
}))

console.log(newArray)