//  Print all pairs of elements (just combinations)


const pairWithCombination=(arr)=>{
    for (let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            console.log(`(${arr[i]},${arr[j]})`)
        }
    }
}

let arr1=[1, 2, 3]

pairWithCombination(arr1)