//  Q3. Swap the first and last elements of an array

const swapLastAndFirstElement=(arr)=>{
    
    
[arr[0],arr[arr.length-1]]=[arr[arr.length-1],arr[0]]
       
      return arr
    }
    

let arr1=[1, 2, 3, 4]
console.log(swapLastAndFirstElement(arr1))