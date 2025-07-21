

function checkVowels(str,char){
    const vowels=["i","o","u","a","e"]
    if(vowels.includes(char)){
        console.log("yes its vowel")
    }
    else{
        console.log("not vowels")
    }
    let count=0;

    for (let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}

console.log("vowel count :: ",checkVowels("hello world iam here","v"))