// Find pairs from array that are equal (duplicates)

const pairWithDuplicate=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for (let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                console.log(`(${arr[i]},${arr[j]})`)
            }
        }
    }
}

let arr1=[1, 2, 3, 2, 1]
pairWithDuplicate(arr1)