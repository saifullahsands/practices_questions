const removeDuplicateArray=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<arr.length-1;j++){
            if(arr[j]===arr[j+1]){
                let result;
                result.push(arr[j])
            }
        }
    }
}