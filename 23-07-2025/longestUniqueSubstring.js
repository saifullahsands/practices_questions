

const UniqueSubString=(str)=>{
   let longestSubstring=''

    for(let i=0;i<str.length;i++){
         let currentSubstring=''
         for(let j=i;j<str.length;j++){
            let currentChar=str[j]

            if(!currentSubstring.includes(currentChar)){
                currentSubstring=currentSubstring+currentChar
            }
            else{
                break
            }
         }
         if(currentSubstring.length>longestSubstring.length){
            longestSubstring=currentSubstring
         }
    }
    return longestSubstring
}
console.log(UniqueSubString("abcabcbb")); // Output: "abc"
console.log(UniqueSubString("bbbbb"));    // Output: "b"
console.log(UniqueSubString("pwwkew"));   // Output: "wke"