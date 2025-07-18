//  Q1. Find all pairs with difference equal to a given number


const pairWithDifferences=(arr)=>{
    for (let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]-arr[i]===2){
            console.log(`(${arr[j]},${arr[i]})`)
        }
    }
    }

}


let arr1=[1, 3, 5, 7]
pairWithDifferences(arr1)