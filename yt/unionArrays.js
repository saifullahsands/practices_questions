

const arr1=[1,2,6,8,17]
const arr2=[4,8,6,19,12,17]

const mergeArray=[...arr1,...arr2]

console.log([...new Set(mergeArray)])