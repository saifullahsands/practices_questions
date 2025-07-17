// Write a simple JavaScript program to join all elements of the following array into a string.

function joinArrayElement(arr) {
const str=arr.toString()
const joining=arr.join("+")
    return {str,joining}
}


const myColor = ["Red", "Green", "White", "Black"]
console.log(joinArrayElement(myColor))