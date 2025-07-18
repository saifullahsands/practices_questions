// Insert an element at a specific index manually

const specificIndexNumber=(arr,val,index)=>{
    const newArray=[]

for (let i=0;i<index;i++){
    newArray[i]=arr[i]
}
   newArray[index]=val

   for(let j=index;j<arr.length;j++){
    newArray[j+1]=arr[j]
   }
   return newArray
}

let arr1=[1, 2, 4, 5]
console.log(specificIndexNumber(arr1,3,2))