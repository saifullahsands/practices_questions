function searchInsert(nums, target) {

 for(let i=0;i<nums.length;i++){
    if(nums[i]>=target){
        return i
    }
 }
 return nums.length
}


console.log(searchInsert([1, 3, 5, 6], 5));  // returns 2
console.log(searchInsert([1, 3, 5, 6], 2));  // returns 1
console.log(searchInsert([1, 3, 5, 6], 7));