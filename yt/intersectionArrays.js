

const arr1=[2,9,6,8,4,4,4];
const arr2=[4,8,6,9,12]

const intersection=arr1.filter((elem)=>arr2.includes(elem))
console.log([...new Set(intersection)])