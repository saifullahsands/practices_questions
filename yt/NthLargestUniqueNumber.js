const NthNumber = (arr,n) => {
    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        let isduplicate = false;

        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isduplicate = true;
                break;
            }
        }

        if (!isduplicate) {
            uniqueArray[uniqueArray.length] = arr[i]; 
        }
    }


    for (let q = 0; q < uniqueArray.length; q++) {
        for (let z = q + 1; z < uniqueArray.length; z++) {
            if (uniqueArray[q] < uniqueArray[z]) {
              
                [uniqueArray[q], uniqueArray[z]] = [uniqueArray[z], uniqueArray[q]];
            }
        }
    }

    console.log(uniqueArray)
    if(n>uniqueArray.length) return null

    return uniqueArray[n-1];
};

console.log(NthNumber([1, 2, 3, 4, 4, 3, 5, 5, 2, 1],5));
