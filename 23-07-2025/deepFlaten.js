const deepFlaten=(arr)=>{
    let result=[]
    for(let item of arr){
        if(Array.isArray(item)){
            result=result.concat(deepFlaten(item))
        }
        else{
            result.push(item)
        }
    }
    return result
}


const nestedArr = [1, [2, [3, [4]], 5], 6];
console.log(deepFlaten(nestedArr)); 