


function removeDuplicate(arr){
    let uniqueArray=[]
    for(let i=0;i<arr.length;i++){
        let isDuplicate=false
        

        for(let j=0;j<uniqueArray.length;j++){
            if(arr[i]===uniqueArray[j]){
                isDuplicate=true
                break;
            }
        }

        if(!isDuplicate){
            uniqueArray.push(arr[i])
        }
    }
    return uniqueArray
}
const arr=[1,2,2,3,3,3,4,5,6]
console.log(removeDuplicate(arr))