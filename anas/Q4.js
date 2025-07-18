//Question 4:Filter out a product by id, and return the rest of the array.

const products = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

const newArray=products.filter((prod)=>prod.id>1)

console.log(newArray)