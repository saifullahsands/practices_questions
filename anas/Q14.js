const orders = [
  {
    orderId: "001",
    customerName: "Alice",
    items: [
      { productId: "p1", productName: "Laptop", price: 900, quantity: 1 },
      { productId: "p2", productName: "Mouse", price: 20, quantity: 2 },
    ],
  },
  {
    orderId: "002",
    customerName: "Bob",
    items: [
      { productId: "p3", productName: "Keyboard", price: 30, quantity: 1 },
      { productId: "p4", productName: "Monitor", price: 150, quantity: 1 },
    ],
  },
  {
    orderId: "003",
    customerName: "Alice",
    items: [
      { productId: "p2", productName: "Mouse", price: 20, quantity: 2 },
      { productId: "p5", productName: "USB Cable", price: 10, quantity: 3 },
    ],
  },
  {
    orderId: "004",
    customerName: "Charlie",
    items: [
      { productId: "p4", productName: "Monitor", price: 150, quantity: 2 },
      { productId: "p6", productName: "Webcam", price: 70, quantity: 1 },
    ],
  },
  {
    orderId: "005",
    customerName: "David",
    items: [
      { productId: "p7", productName: "Headphones", price: 80, quantity: 1 },
    ],
  },
  {
    orderId: "006",
    customerName: "Bob",
    items: [
      { productId: "p2", productName: "Mouse", price: 20, quantity: 1 },
      { productId: "p5", productName: "USB Cable", price: 10, quantity: 2 },
    ],
  },
  {
    orderId: "007",
    customerName: "Charlie",
    items: [
      { productId: "p1", productName: "Laptop", price: 900, quantity: 1 },
      { productId: "p8", productName: "Tablet", price: 300, quantity: 1 },
    ],
  },
  {
    orderId: "008",
    customerName: "Alice",
    items: [
      { productId: "p9", productName: "Charger", price: 25, quantity: 2 },
    ],
  },
];


const newArray=orders.reduce((acc,order)=>{
    const name=order.customerName

    if(!acc[name]){
        acc[name]=0
    }
    order.items.forEach((item)=>{
        acc[name]=acc[name]+item.quantity
    })
    return acc
},{})

console.log(newArray)