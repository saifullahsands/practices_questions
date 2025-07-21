

const maxCharOccurence=(str)=>{
    let frequency={}
    let maxCount=0;
    let maxChar=''

    for(let i=0;i<str.length;i++){
        let char=str[i]

        if(frequency[char]){
            frequency[char]++
        }
        else{
            frequency[char]=1
        }

        if(frequency[char]>maxCount){
            maxCount=frequency[char]
            maxChar=char
        }
        
    }
     console.log(`Most frequent character: "${maxChar}"`);
    console.log(`It appeared ${maxCount} times.`);
}

maxCharOccurence("mississippi")