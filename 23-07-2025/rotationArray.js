const array_rotation=(arr,N)=>{
    const len=arr.length
     console.log("N before ",N)
    N=N%len
    console.log("N after ",N)
    let rotated=[]
    for(let i=N;i<len;i++){
        rotated.push(arr[i])
    }
    for(let j=0;j<N;j++){
        rotated.push(arr[j])
    }
    return rotated
}

const arr1=[1,2,3,4]
const N=1

console.log(array_rotation(arr1,N))



const right_rotation=(arr,N)=>{
    const len=arr.length;
    N=N%len
    let rotated=[]
    for(let i=len-N;i<len;i++){
        rotated.push(arr[i])
    }
    for(let i=0;i<len-N;i++){
        rotated.push(arr[i])
    }

    return rotated
}



console.log(right_rotation(arr1,N))