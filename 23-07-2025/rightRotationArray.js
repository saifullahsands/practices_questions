

const circulatedArray=(a,k,queries)=>{

    function shifted_array(arr){
        let temp=arr[0]

        for(let i=0;i<arr.length-1;i++){
            arr[i]=arr[i+1]
        }
        arr[arr.length-1]=temp
            return arr
    }

    for (let count=0;count<k;count++){
        shifted_array(a)
    }

    console.log(a)

    let result=[]

    for(let i=0;i<queries.length;i++){
        result.push(a[queries[i]])
    }
    return result
}

let myArr = [1, 2, 3, 4, 5];
let k=1
let queries=[0,1]

console.log(circulatedArray(myArr,k,queries))