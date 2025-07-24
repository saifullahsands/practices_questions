const trapWater = (height) => {
  let maxRight = 0;
  let maxLeft = 0;
  let left = new Array(height.length);
  let right = new Array(height.length);

  // Step 1: Fill left max array
  for (let i = 0; i < height.length; i++) {
    if (height[i] > maxLeft) {
      maxLeft = height[i];
    }
    left[i] = maxLeft;
  }

  // Step 2: Fill right max array
  for (let i = height.length - 1; i >= 0; i--) {
    if (height[i] > maxRight) {
      maxRight = height[i];
    }
    right[i] = maxRight;
  }

  // Step 3: Calculate trapped water
  let trapWater = 0;
  for (let i = 0; i < height.length; i++) {
    let totalWater = Math.min(left[i], right[i]) - height[i];
    if (totalWater > 0) {
      trapWater += totalWater;
    }
  }

  console.log("Left max heights:", left);
  console.log("Right max heights:", right);
  console.log("Total trapped water:", trapWater);
};

trapWater([0, 1, 0, 2, 1, 0, 1, 3]);


// const arr = [0, 1, 0, 2, 1, 0, 1, 3];

// let total = 0;


// for (let index = 0; index < arr.length; index++) {
//   let element = arr[index];
//   let count = 0;
//   if (arr[index - 1] > arr[index] && arr[index] < arr[index + 1] || arr[index-1] > arr[index] && arr[index+1] > arr[index] ) {
//     //SecondIndex Here
//     let maximum = Math.min(arr[index - 1], arr[index + 1]);
//     trapWater=maximum-arr[index]
//     console.log(trapWater)
//     // console.log(trapWater)
//     // console.log(maximum)
//     //Pick next values
//   }
// }
// console.log(trapWater)
// 1 0 1       0 6 0