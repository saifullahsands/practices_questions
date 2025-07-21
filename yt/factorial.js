

function factorial(n){
    let fact=1
    if(n===1 || n===0) return fact
    for(let i=n;i>=1;i--){
        fact=fact*i
    }
    return fact
}

console.log(factorial(5))