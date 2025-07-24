// 15. Products with price > 100
const products15 = [
  { name: 'A', price: 50 },
  { name: 'B', price: 200 },
  { name: 'C', price: 150 }
];



const newArray=products15.filter((prod)=>prod.price>100)

console.log(newArray)