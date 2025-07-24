function findLongestWord(sentence) {

    const mySplit=(str)=>{
        let word=''
        let words=[]

        for(let i=0;i<str.length;i++){
            if(str[i] !==" "){
                word=word+str[i]
            }
            else{
                if(word !==""){
                    words.push(word)
                    word =""
                }

            }
        }

        if(word !==""){
            words.push(word)
        }
        return words
    }


    let myword=mySplit(sentence)
    console.log(myword)

    let longest=""
    for(let word of myword){
        if(word.length>longest.length){
            longest=word
        }
    }
    return longest
}



console.log(findLongestWord("I am learning JavaScript")); // Output: "JavaScript"
console.log(findLongestWord("This is a test sentence"))