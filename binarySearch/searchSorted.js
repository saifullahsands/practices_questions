


function search(arr,target){
    let left=0
    let right=arr.length-1

    while (left < right){
        const mid=Math.floor((left+right)/2)

        if(arr[mid]===target) return true

        if(arr[mid] === arr[left] === arr[right]){
            right--
            left++
        }

        else if(arr[left] <= arr[mid]){
            if(arr[left] <=target && target < arr[mid]){
                right=mid-1
            }
            else{
                left=mid+1
            }
        }



        else{
            if(arr[mid] < target && target <=arr[right]){
                left=mid +1
            }
            else{
                right=mid-1
            }
        }

    }

    return false
}

console.log(search([2, 5, 6, 0, 0, 1, 2], 0)) // true
console.log(search([2, 5, 6, 0, 0, 1, 2], 3)) // false



