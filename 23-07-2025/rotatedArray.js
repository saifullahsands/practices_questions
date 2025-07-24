const circularRotatedArray = (a, k, queries) => {
  function shifted_array(arr) {
    let temp = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
      arr[i + 1] = arr[i]; //shifted array to right
    }
    arr[0] = temp;
    return arr;
  }

  for (let count = 0; count < k; count++) {
    shifted_array(a);
  }

  let result = [];

  for (let j = 0; j < queries.length; j++) {
    result.push(a[queries[j]]);
  }
  return result;
};


const a = [2, 4, 6, 8, 10, 12, 14];
const k = 2;
const queries = [0, 1, 2];

console.log(circularRotatedArray(a,k,queries))