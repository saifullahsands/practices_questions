const findLargestAndSmallest=(arr)=>{
    let max=arr[0]
    let min=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
        if(arr[i]< min){
            min=arr[i]
        }
    }
    return {max,min}
}

let arr1=[5, 1, 9, 3]
const {min,max}=findLargestAndSmallest(arr1)
console.log(`max ${max} - min ${min} :: ${max-min}`)
console.log(findLargestAndSmallest(arr1))