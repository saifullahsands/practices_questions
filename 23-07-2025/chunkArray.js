

const chunk_arrays=(arr,N)=>{
    let result=[]

    for(let i=0;i<arr.length;i+=N){
        let chunks=[]

        for(let j=i;j<i+N && j<arr.length; j++){
            chunks.push(arr[j])
        }
        result.push(chunks)
    }
    return result
}

const arr=[1,2,3,4,5,6,7,8,9]
const N=3

console.log(chunk_arrays(arr,N))