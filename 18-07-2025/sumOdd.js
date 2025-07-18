// Q6. Find sum of only odd numbers in the array

const oddSumNumberInArray=(arr)=>{
    let sumodd=0
    for (let i=0;i<arr.length;i++){
        if(arr[i] % 2 !==0){
                sumodd=sumodd+arr[i]
        }
    }
    return sumodd
}

let arr1=[1, 2, 3, 4, 5]
console.log(oddSumNumberInArray(arr1))

