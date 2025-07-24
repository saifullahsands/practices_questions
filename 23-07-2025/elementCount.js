

const findElementCount=(arr,num)=>{
    let count=0;
    let element=[]

    function myPush(a,value){
        a[a.length]=value;
        return a.length
    }

    for(let i=0;i<arr.length;i++){
        if(arr[i]===num){
            count ++
            myPush(element,'_')
        }
        else{
            myPush(element,arr[i])
        }
    }

    return {count,element}
}

let arr1 = [3, 2, 2, 3];
let result = findElementCount(arr1, 3);  // 👈 pass both array and number here

console.log(`array is this :: [${result.element}]`);
console.log(`count is this :: ${result.count}`);