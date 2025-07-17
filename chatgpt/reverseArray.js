const reverseArray=(arr)=>{
    let result=[]
    for (let i=0;i<arr.length;i++){
        result[arr.length-1-i]=arr[i]
    }
    return result
}



const arr1=[1, 2, 3]
console.log(reverseArray(arr1))