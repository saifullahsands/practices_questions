

const multiplyEvenNumber=(arr)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2===0){
           arr[i]= arr[i]*2
        }
        else {
            arr[i]=arr[i]*3
        }
    }
    return arr
}

const input = [10, 15, 22, 33, 50];
console.log(multiplyEvenNumber(input))