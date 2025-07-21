const arr=[1,2,4,4,6,7]

const duplicate=arr.filter((elem,index,arr)=>arr.indexOf(elem) !== index)
console.log(duplicate)