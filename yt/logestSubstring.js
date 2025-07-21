

const logestSubString=(str)=>{
    let max=0
    for(let i=0;i<str.length;i++){
        let current=''
        for(let j=i;j<str.length;j++){
          let  char=str[j]
           if(current.indexOf(char)!==-1){
            break
        }
        else{
            current=current+char
            if(current.length>max){
                max=current.length
            }
        }
        }
        
       
    }
    return max
}
console.log(logestSubString("abcabcbb"));   // Output: 3
console.log(logestSubString("bbbbb"));      // Output: 1
console.log(logestSubString("pwwkew")); 