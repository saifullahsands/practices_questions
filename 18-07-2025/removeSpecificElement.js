
// Remove a specific element from array (without using built-in method)

const removeSpecificElementInArray=(arr,n)=>{
    let result=[]
    let index=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==n){
          result[index]=arr[i];
          index++
        }
    }
    return result
}

let arr1=[1, 2, 3, 4]
console.log(removeSpecificElementInArray(arr1,1))