

const moveZeroes=(arr)=>{

    let lastnoneZeroFound=0
        for(let i=0;i<arr.length;i++){
            if(arr[i]!==0){
            arr[lastnoneZeroFound]=arr[i]
            lastnoneZeroFound++
                       }
        }
        return arr
}

const arr=[1,0,2,0,3,0]
console.log(moveZeroes(arr))