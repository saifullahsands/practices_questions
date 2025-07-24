

const arrayKeyValue=(arr)=>{
    let obj={}
    for(let i=0;i<arr.length;i++){
    let key=arr[i][0]
    let value=arr[i][1]
    obj[key]=value
    }
    return obj
}

const arr = [
  ['name', 'Alice'],
  ['age', 25],
  ['city', 'Karachi']
];
console.log(arrayKeyValue(arr))