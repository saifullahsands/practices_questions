function frequentArray(arr) {
    let count = {};          // Object hona chahiye, number nahi
    let maxCount = 0;        // Sabse zyada baar aane wale item ka count
    let mostFrequent = null;

    for(let i = 0; i < arr.length; i++) {
        let item = arr[i];

        if(count[item] === undefined) {
            count[item] = 1;
        } else {
            count[item] = count[item] + 1;
        }

        if(count[item] > maxCount) {
            maxCount = count[item];
            mostFrequent = item;
        }
    }

    console.log("\nFinal Result:");
    console.log("Sabse zyada baar aane wala item:", mostFrequent);
    console.log("Yeh item aaya", maxCount, "baar");
}

let arr = [3, "a", "a", 2, 3, "a", 3];
frequentArray(arr);
