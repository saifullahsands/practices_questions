

const multiply=(num1,num2)=>{
    if(num1==="0"||num2==="0") return "0"
        
    let result=new Array(num1.length+num2.length).fill(0)

    for(let i=num1.length-1;i>=0;i--){
        for(let j=num2.length-1;j>=0;j--){

            const mult=(num1[i] - '0' ) * ( num2[j] - "0")
            const pos1=i+j
            const pos2=i+j+1
            const sum=mult + result[pos2]
            result[pos2]=sum % 10
            result[pos1] += Math.floor(sum/10)

        }
    }
    if(result[0]===0){
        result.shift()
    }
    return result.join('')
}


console.log(multiply("123", "456")); // Output: "56088"
console.log(multiply("9", "9")); 



