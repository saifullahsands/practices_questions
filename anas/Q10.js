// 16. Sum with reduce
const numbers16 = [5, 10, 15];
const newArray=numbers16.reduce((pre,curr)=>{
    return pre+curr
},0)

console.log(newArray)