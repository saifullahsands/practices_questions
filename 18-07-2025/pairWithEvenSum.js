//  Count how many pairs have even sum

const pairHaveEvenNumber=(arr)=>{
    let count=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if((arr[i]+arr[j]) % 2 === 0){
                console.log(`(${arr[i]},${arr[j]})`)
                count++
            }
        }
    }
    return count
}

let arr1=[1, 2, 3, 4]
console.log(pairHaveEvenNumber(arr1))