const checkPalindrome=(arr)=>{
    let result=[]
    for (let i=0;i<arr.length;i++){
        result[arr.length-1-i]=arr[i]
    }
    
    let palindrome=true;
    for (let j=0;j<arr.length;j++){
        if(arr[j]!==result[j]){
            palindrome=false
            break
        }
    }
    if(palindrome){
        console.log("its is palindrome")
    }
    else{
        console.log("it is not palindrome")
    }
}

let arr1=[1, 2, 3, 2, 1]
checkPalindrome(arr1)