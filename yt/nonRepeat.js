

const nonRepeatingWord=(str)=>{
    let freq={}

    for(let i=0;i<str.length;i++){
      let char=str[i]

      if(freq[char]){
        freq[char]++
      }else{
        freq[char]=1
      }
    }
    

    for(let i=0;i<str.length;i++){
        let char=str[i]
        if(freq[char]===1){
            return char
        }
    }
    return null
}

console.log(nonRepeatingWord("aabbccddeefg"))