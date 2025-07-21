

function checkPalindrome(word) {
    let reversedWod="";
        for(let i=word.length-1;i>=0;i--){
        reversedWod=reversedWod+word[i]

            // if(reversedWod===word)
    }

    if(reversedWod===word){
        return true
    }
    return false
}

console.log(checkPalindrome("madam"))