const leaderArray = (arr) => {
  let max_from_right = arr[arr.length - 1];
  let leader = [max_from_right];

  function myUnshift(a, value) {
    for (let i = a.length - 1; i >= 0; i--) {
      a[i + 1] = a[i];
    }
    a[0] = value;
    return a;
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] >= max_from_right) {
      max_from_right = arr[i];
      myUnshift(leader, arr[i]);
    }
  }
  return leader;
};

const arr = [1, 2, 3, 4, 5, 2];
console.log(leaderArray(arr));
