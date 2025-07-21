

const reverseWordInSentence=(str)=>{
   let words=[]
   let word=''

   for(let i=0;i<str.length;i++){
    let char=str[i]
    if(char !== " "){
        word=word+char
    }
    else{
        words[words.length]=word;
        word=""
    }
   }

   if(word !==""){
    words[words.length]=word
   }


   let reversed=""

   for(let j=words.length-1;j>=0;j--){
    reversed=reversed+words[j]
    if(j>0){
        reversed=reversed+" "
    }
   }
   return reversed
}

console.log(reverseWordInSentence("hello world good morning"))