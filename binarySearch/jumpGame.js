const canJump = (arr) => {
  let goal = arr.length - 1;
  for (let i = arr.length - 2; i >= 0; i--) {
    if (i + arr[i] >= goal) {
      goal = i;
    }
  }
  return goal === 0;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([0])); // true
console.log(canJump([1, 0, 1, 0]));
