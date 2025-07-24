// Find the most frequent element in an array.

const most_frequent_element=(arr)=>{
 
      let maxCount = 0;
  let mostFreqElement = null;
    for(let i=0;i<arr.length;i++){
        let element=arr[i]
        let count=0
        for(let j=0;j<arr.length;j++){
                if(arr[j]===element){
                    count++
                }
        }

        if(count>maxCount){
            maxCount=count
            mostFreqElement=element
        }
    }
    return {mostFreqElement}
}


const arr1=[1,2,3,4,5,1,2,3,3,3]
console.log(most_frequent_element(arr1))