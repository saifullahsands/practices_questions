

const anagramChecker=(word1,word2)=>{
   let str1=word1.toLowerCase()
   let str2=word2.toLowerCase()
   if(str1.length !==str2.length) return false


//    sorting 

let sortstr1=str1.split("").sort().join("")
let sortstr2=str2.split("").sort().join("")

if(sortstr1 === sortstr2){
    return true
}
return false
}

console.log(anagramChecker("hello", "world"))