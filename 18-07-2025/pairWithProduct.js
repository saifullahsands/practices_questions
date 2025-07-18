// Find all pairs where product is less than 10

const findAllPairWithProduct=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for (let j=i+1;j<arr.length;j++){
            if((arr[i]+arr[j]) < 10){
                console.log(`(${arr[i]},${arr[j]})`)
            }
        }
    }
}

let arr1=[1, 2, 3, 4, 5]
findAllPairWithProduct(arr1)