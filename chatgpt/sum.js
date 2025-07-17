const sumAllElement=(arr)=>{
let sum=0;

for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
}
return sum
}

let arr1=[4,5,6]
console.log("sum ",sumAllElement(arr1))