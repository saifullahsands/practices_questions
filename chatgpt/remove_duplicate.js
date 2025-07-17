const removeDuplicate=(arr)=>{
    let uniqueArray=[]
    for(let i=0;i<arr.length;i++){
        let duplicate=false
        for (let j=0;j<uniqueArray.length;j++){
            if(arr[i]===uniqueArray[j]){
                duplicate=true;
                break;
            }
        }
        if(!duplicate){
            uniqueArray.push(arr[i])
        }
    }
    return uniqueArray
}

let arr1=[1, 2, 2, 3, 4, 4, 5]
console.log(removeDuplicate(arr1))