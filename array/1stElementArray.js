function  get_the_first_element(arr,n){
    if(arr==null){
        return void 0
    }
    if(n==null){
        return arr[0]
    }
    if(n<0){
        return []
    }
    return arr.slice(0,n)
}

console.log( get_the_first_element([7, 9, 0, -2]));
console.log( get_the_first_element([], 3));
console.log( get_the_first_element([7, 9, 0, -2], 4));
console.log( get_the_first_element([7, 9, 0, -2], 6));
console.log( get_the_first_element([7, 9, 0, -2], -3));