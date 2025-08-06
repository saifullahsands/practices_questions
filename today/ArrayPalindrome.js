

function checkPalindrom(arr) {
    for(let i=0;i<Math.floor(arr.length/2);i++){
    if(arr[i] !==arr[arr.length-1-i]){
        return false
    }
    }
    return true
}

const arr=[1, 2, 3, 4]

console.log(checkPalindrom(arr))
