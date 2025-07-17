function is_array(input){
    if(toString.call(input)==='[object Array]'){
        console.log("it is array ")
    }
    else{
        console.log("it is not an array")
    }
}


const arr=[1,3,4,5]
is_array(arr)
const str="hello"
is_array(str)

const num=1234
is_array(num)