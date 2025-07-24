function expect(val){
    function toBe(x){
        if(val===x)return true
        else throw new Error("Not Equal")
    }
    function notToBe(y){
        if(y!==val) return true
        else throw new Error("Equal")
    }
    return {toBe,notToBe}
}

expect(5)