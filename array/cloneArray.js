function cloneArray(input){
    
    return input.slice(0)
}

const originalArray=[1, 2, 4,[0,9]]
const clonedArray=cloneArray(originalArray)
clonedArray[3][0]=99
clonedArray[1]=10


console.log("Original",originalArray)
console.log("cloned Array",clonedArray)