// Given a string S and a character 'c', the task is to count the occurrence of the given character in the string.

const countString=(str,n)=>{
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]===n){
            count++
        }
    }
    return count
}



console.log(countString("geeksforgeeks","e"))