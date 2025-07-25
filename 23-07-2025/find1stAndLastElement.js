function searchRange(nums, target) {
  if (nums.length === 0) return [-1, -1];

  let first = -1;
  let last = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      first = i;
      
      break;
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === target) {
      last = i;
      break;
    }
  }

  return [first, last];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 7)); // [1, 2]
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]
console.log(searchRange([], 2));
