
//  Find all pairs of numbers whose sum is equal to a given number
const findAllPair=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===6){
                console.log(`(${arr[i]},${arr[j]})`)
            }
        }
    }
}

let arr1=[1, 2, 3, 4, 5]
findAllPair(arr1)