

function sortingArray(arr){
    
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] > arr[j]){
                // swap 
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }
    return arr

}

const arr=[20,2,4,5,8,10]
console.log(sortingArray(arr))

