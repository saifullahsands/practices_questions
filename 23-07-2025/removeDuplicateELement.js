const duplicateElement = (arr) => {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    let duplicate = false;
    for (let j = 0; j < uniqueArray.length; j++) {
      if (arr[i] === uniqueArray[j]) {
        duplicate = true;
        break;
      }
    }
    if (!duplicate) {
      uniqueArray[uniqueArray.length] = arr[i];
    }
  }
  return uniqueArray;
};
