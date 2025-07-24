// 19. Max number using reduce
const numbers19 = [12, 45, 67, 89, 23];

const newArray=numbers19.reduce((prev,next)=>{
    return prev>next ? prev :next
},0)

console.log(newArray)