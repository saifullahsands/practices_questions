
const arr=[1,2,4,233,400,599]

function maxMin(arr){
    return arr.reduce((pre,cur)=>{
        return pre < cur ? pre:cur
    })
}

console.log(maxMin(arr))