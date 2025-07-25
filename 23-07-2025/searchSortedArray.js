

function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // ✅ Target mil gaya
        if (nums[mid] === target) {
            return mid;
        }

        // ✅ Left half sorted hai
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // 🔍 Target left mein hai
            } else {
                left = mid + 1;  // 🔍 Target right mein hai
            }
        }
        // ✅ Right half sorted hai
        else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1; // 🔍 Target right mein hai
            } else {
                right = mid - 1; // 🔍 Target left mein hai
            }
        }
    }

    // ❌ Nahin mila
    return -1;
}

console.log( search([4,5,6,7,0,1,2], 0))  // Output: 4
console.log( search([4,5,6,7,0,1,2], 3))  // Output: -1
console.log( search([1], 0))