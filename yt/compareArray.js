

const arr1=[1,2,3,4,5]
const arr2=[5,4,3,2,6]

const isArraySame=arr1.length==arr2.length && 
arr1.every((curEle)=>{
    if(arr2.indexOf(curEle) >-1){
        return (curEle=[arr2.indexOf(curEle)])
    }
})


console.log(isArraySame)