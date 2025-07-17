
function last_element_array(arr,n) {
    if(arr==null){
        return void 0;
    }
    if(n==null){
        return arr[arr.length-1]
    }
    return arr.slice(Math.max(arr.length-n,0))
}


console.log(last_element_array([7, 9, 0, -2]));
console.log(last_element_array([7, 9, 0, -2], 3));
console.log(last_element_array([7, 9, 0, -2], 6));