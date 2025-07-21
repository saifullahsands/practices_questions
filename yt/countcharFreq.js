

const countCharFreq=(str)=>{
    return [...str].reduce((pre,next)=>{
        if(pre[next]){
            pre[next]++
        }
        else{
            pre[next]=1
        }
        return pre
    },{})
}

console.log(countCharFreq("apple"))