// find second Highest Number


const findSecondHighestNumber=(arr)=>{
    let highest=-Infinity
    let secondHighest=-Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i] >highest){
            secondHighest=highest
            highest=arr[i]
        }
        else if(arr[i] < secondHighest && arr[i] !==highest){
            secondHighest=arr[i];
        }
    }
    console.log("Second highest:", secondHighest);
}

const arr1 = [12, 55, 23, 67, 88];

findSecondHighestNumber(arr1)