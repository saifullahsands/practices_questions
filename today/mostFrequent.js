
function mostFrequentElement(arr){
    let frequent={}
    let maxCount=0
    let mostfrqu;
    for(let i=0;i<arr.length;i++){
        let element=arr[i]

        if(frequent[element]){
            frequent[element]++
        }
        else{
            frequent[element]=1
        }

        if(frequent[element] > maxCount){
            maxCount=frequent[element];
            mostfrqu=element
        }
    }

    return mostfrqu
}

const arr=[1,2,3,4,4,5,5,5,6,7]
console.log(mostFrequentElement(arr))