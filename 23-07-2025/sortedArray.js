
const sortedArray =(a)=>{
    function asendingOrder(arr){
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i] > arr[j]){
                    [arr[i],arr[j]]=[arr[j],arr[i]]
                }
            }
        }
        return arr
    }


    function descendingOrder(arr){
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]<arr[j]){
                    [arr[i],arr[j]]=[arr[j],arr[i]]
                }
            }
        }
        return arr
    }



    return {assending:asendingOrder([...a]),descending:descendingOrder([...a])}
}

const a=[12,56, 4,17, 8,10,19, 99]

console.log(`assending Order :: ${sortedArray(a).assending} \n descending Order :: ${sortedArray(a).descending} `)