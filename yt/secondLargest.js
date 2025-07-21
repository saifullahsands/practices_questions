

function SecondLargest(arr) {
    const firstLargestValue=Math.max(...arr)
    console.log(firstLargestValue)
    index=arr.indexOf(firstLargestValue)
    console.log(index)
    arr.splice(index,1)
    const second=Math.max(...arr)
    console.log(second)
    
}

const arr=[1,2,3,4,5]
SecondLargest(arr)