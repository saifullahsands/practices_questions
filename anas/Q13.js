// 20. Group users by age
const users20 = [
  { name: 'A', age: 20 },
  { name: 'B', age: 30 },
  { name: 'C', age: 20 }
];


const newArray=users20.reduce((acc,user)=>{
    const age=user.age
    if(!acc[age]){
        acc[age]=[]
    }
    acc[age].push(user)
    return acc
},{})

console.log(newArray)