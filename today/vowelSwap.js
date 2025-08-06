
function vowelSwap(str) {
    const vowel="aiouve";
    const chars=str.split("")
    const vowlPosistion=[]
    for(let i=0;i<chars.length;i++){
       if(vowel.includes(chars[i])){
        vowlPosistion.push(i)
       }
    }


    for(let j=0;j<Math.floor(vowlPosistion.length/2);j++){
        let leftIndex=vowlPosistion[j]
        let rightIndex=vowlPosistion[vowlPosistion.length-1-j]

        let temp=chars[leftIndex]
        chars[leftIndex]=chars[rightIndex]
        chars[rightIndex]=temp



    }


    return chars.join("")
}


const str="hello"
console.log(vowelSwap(str))