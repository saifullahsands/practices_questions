

function findMissingNumber(arr) {
 arr.sort((a, b) => a - b);
 for(let i=0;i<arr.length;i++){
    if(arr[i+1] !==arr[i]+1){
        return arr[i]+1
    }
 }

 return null
}

const arr=[4,5,7]
console.log(findMissingNumber(arr))