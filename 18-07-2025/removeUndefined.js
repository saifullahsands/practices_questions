// Remove all null and undefined values from array

const removeUndefinedAndNull=(arr)=>{
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== undefined && arr[i] !== null){
            result.push(arr[i])
        }
    }
    return result
}

let arr1=[1, null, 2, undefined, 3]
console.log(removeUndefinedAndNull(arr1))