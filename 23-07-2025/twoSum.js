
const twoSum=(arr,target)=>{
    let result=[]
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
               result.push(i,j)
            }
        }
    }
    return result
}


const arr1=[2,7,11,17]
console.log(twoSum(arr1,9))


const twoSum1=(num,target)=>{
let storage=[]
for(let [index,num] of num.entries()){
    if(storage[num] !==undefined) return [storage[num],index]
    storage[target-num]=index
}
}