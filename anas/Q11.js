// 17. Count frequency of items
const fruits17 = ['apple', 'banana', 'apple', 'orange', 'banana'];

const newArray=fruits17.reduce((prev,next)=>{
    if(prev[next]){
        prev[next]++
    }
    else{
        prev[next]=1
    }
    return prev
},{})
console.log(newArray)