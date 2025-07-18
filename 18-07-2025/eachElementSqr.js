
// Q4. Create a new array where each element is square of the original
const eachElementSquare=(arr)=>{
    let result=[]
    let temp;
    for (let i=0;i<arr.length;i++){
        temp=arr[i]*arr[i]
        result.push(temp)
    }
    return result
}

let arr1=[2, 3, 4]

console.log(eachElementSquare(arr1))