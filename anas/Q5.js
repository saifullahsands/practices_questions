// QUESTION : You are building an order summary system for an e-commerce store.

const rawItems = [
  { id: 1, name: "Shoes", price: 100, quantity: 2, category: "footwear", inStock: true },
  { id: 2, name: "T-Shirt", price: 25, quantity: 1, category: "clothing", inStock: false },
  { id: 3, name: "Socks", price: 5, quantity: 5, category: "clothing", inStock: true },
];

const newArray=rawItems.filter((item)=>item.inStock===false)
console.log(newArray)


const newArray1=rawItems.map((item)=>({
    ...item,
    totalPrice:item.quantity * item.price
}))
console.log(newArray1)

let deepCopy=JSON.parse(JSON.stringify(rawItems))
const b=deepCopy
console.log("deepCopy",b)