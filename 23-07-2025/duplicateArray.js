const duplicate = (arr) => {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        uniqueArray.push(arr[i]);
      }
    }
  }
  return uniqueArray;
};

const removeDuplicateArray = (arr) => {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < unique.length; j++) {
      if (arr[i] === unique[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (isDuplicate) {
      arr[i] = undefined;
    } else {
      unique[unique.length] = arr[i];
    }
  }
  return arr;
};

const arr1 = [1, 2, 3, 2, 4, 5, 6, 5, 6];

console.log(removeDuplicateArray(arr1));
