// Write a JavaScript program to sort the items of an array.

function sortedArray(arr){
    let temp;
    for (let i=0;i<arr.length;i++){
     for (let j=0;j<arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
     }
    }
    return arr
}

let myArray = [5, 3, 8, 1];
let result = sortedArray(myArray);
console.log(result)