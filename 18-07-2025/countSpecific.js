//  Count how many times a specific number appears

const specificNumberAppear=(arr,n)=>{
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===n){
                count ++
            }
        
    }
    return count
}


let arr1=[1, 2, 2, 3, 2,3,4,4,4,4,4]
console.log(specificNumberAppear(arr1,4))
