

function findMinimumDuplicate(arr){

    let left=0;
    let right=arr.length-1
    while(left < right){
        const mid=Math.floor((left+right)/2)
        if(arr[mid] > arr[right]){
            left=mid+1
        }
        else if(arr[mid] < arr[right]){
            right=mid
        }
        else{
            right--
        }
    }

    return arr[left]
}

console.log(findMinimumDuplicate([2, 2, 2, 0, 1])); // Output: 0
console.log(findMinimumDuplicate([1, 1, 1, 1, 0, 1])); // Output: 0
console.log(findMinimumDuplicate([10, 1, 10, 10, 10])); 