
// function matrixRotation(matrix){
    
//     const n=matrix.length
//     for(let i=0;i<matrix.length;i++){
//         for(let j=i;j<matrix.length;j++){
//             let temp=matrix[i][j]
//             matrix[i][j]=matrix[j][i]
//             matrix[j][i]=temp
//         }
//     }
//     for(let i=0;i<n;i++){
//         let left=0
//         let right=n-1

//     }
// }


const arr=[
    [1, 2, 3],[4, 5, 6],[7, 8, 9]
]

for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    console.log(`Swapping arr[${i}][${j}] = ${arr[i][j]} with arr[${j}][${i}] = ${arr[j][i]}`);
    let temp = arr[i][j];
    arr[i][j] = arr[j][i];
    arr[j][i] = temp;
  }
}

console.log("After Transpose:");
console.log(arr); 
for(let i=0;i<arr.length;i++){
    let left=0
let right=arr.length-1
while(left<right){
    console.log("arr :: ",arr[i][right])
    let temp=arr[i][left]
    console.log("temp in while loop",temp)
    arr[i][left]=arr[i][right]

    arr[i][right]=temp
    left++
    right --
}

}
console.log(arr)

