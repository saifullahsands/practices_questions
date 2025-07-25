const arr=[3, 4, 5, 1, 2]

const findMinimum=(arr)=>{
    let left=0
    let right=arr.length-1

    while(left<right){
        let mid=Math.floor((left+right)/2)
        if(arr[mid] > arr[right]){
                left=mid+1
        }
        else{
            right=mid
        }

    }
    return arr[left]

}


console.log(findMinimum(arr));