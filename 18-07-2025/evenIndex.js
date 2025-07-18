// Print only the elements at even indexes

const printEvenIndexesValue=(arr)=>{
    const result=[]
    for(let i=0;i<arr.length;i++){
        if(i % 2===0){
            result.push(arr[i])
        }
    }
    return result
}

let arr1=[10, 20, 30, 40, 50]
console.log(printEvenIndexesValue(arr1))