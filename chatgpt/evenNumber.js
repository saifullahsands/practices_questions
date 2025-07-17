

const findEvenNumber=(arr)=>{
 const evenNumber=arr.filter(num=>num%2===0)
 return evenNumber

}

let arr1=[1, 2, 3, 4, 5, 6]
console.log(findEvenNumber(arr1))