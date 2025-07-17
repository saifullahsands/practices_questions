// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

function insertDashes(num){
    const str=num.toString()
    const result=[str[0]]
    console.log(str)
    for(let i=1;i<str.length;i++){
       
        if(str[i-1] % 2===0 && str[i] % 2===0){
            result.push("-",str[i])
        }
        else{
        result.push(str[i])
        }
    }
    console.log(result.join(""))
}

const num1=123467;
insertDashes(num1)