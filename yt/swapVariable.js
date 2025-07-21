

function swapVariable(a,b){
    let temp;
    temp=b
    b=a
    a=temp
    console.log(`a is ${a} and b ${b} value is swap`)
}

swapVariable(10,20)


function swapVariableWithoutThirdVaraiable(a,b){
    [a,b]=[b,a]

    console.log(`a is ${a} and b is ${b} ::`)
}

swapVariableWithoutThirdVaraiable(10,20)



