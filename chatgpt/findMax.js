// Find the Maximum Number

const maximum=(arr)=>{
    let max;
    let temp;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]<arr[j+1]){
             temp=arr[j]
             arr[j]=arr[j+1]
             arr[j+1]=temp   
            }
        }
    }
    max=arr[0]
    return max
}

let arr1=[1, 3, 7, 2, 5]
console.log("maximum number",maximum(arr1))