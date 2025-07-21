

const findMissingNumber=(arr)=>{
      let missingArray=[];
    for(let i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i] < arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }
    let maximum=arr[0]
    let minimum=arr[arr.length-1]

    for(let z=minimum;z<maximum;z++){
        let isFound=false

        for(let k=0;k<arr.length;k++){
            if(arr[k]===z){
                isFound=true
                break
            }
        }
        if(!isFound){
            missingArray[missingArray.length]=z
        }
    }
    return missingArray
}

let arr1=[1,2,3,6,8,7,5]

console.log(findMissingNumber(arr1))