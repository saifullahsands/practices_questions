const arr=[1,2,3,4,5,6,7,8,8,9,9,9,9,1,1]

let pairedvalue=[]
let seen=new Set()
for(let i =0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]===10  ){
            let pair=[arr[i],arr[j]].sort((a,b)=>a-b)
            let pairStar=pair.join(",")
            
            if(!seen.has(pairStar)){
                pairedvalue.push(pair)
                seen.add(pairStar)
            }
        }
    }
}
console.log("seen",seen)
console.log(pairedvalue)

