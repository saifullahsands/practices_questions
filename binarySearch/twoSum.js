

const dumb=(arr,target)=>{

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]===target){
           return [i,j]
        }
    }
}
return []

}

























const arr=[2,3,4]
const target=6
console.log(dumb(arr,target))



// const a = 20
// a = 30

// const b = {a:30}
// b = [{c:40}]


