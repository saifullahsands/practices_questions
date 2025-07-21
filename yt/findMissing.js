const arr=[19,2,3,4,5,9,10]

function findMissing(arr){
       let missingArray=[];
    const Maximum =Math.max(...arr)
    const Minimum=Math.min(...arr)

    for(let i=Minimum;i<Maximum;i++){
        if(arr.indexOf(i)<0){
            missingArray.push(i)
        }
    }
    return missingArray
}

console.log(findMissing(arr))