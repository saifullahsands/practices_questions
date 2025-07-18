//  Find the total number of positive numbers in an array

const checkNumberPositiveInArray=(arr)=>{
    let count=0
    for(let i=0;i<arr.length;i++){
      if(arr[i]>0){
        count ++
      }
    }
    return count
}

let arr1=[1, -2, 3, -4, 5]
console.log(checkNumberPositiveInArray(arr1))