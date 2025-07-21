// 1. Print all elements in an array using forEach


const numbers1 = [1, 2, 3, 4];
numbers1.forEach((number)=>console.log(number))



//  2. Use a for loop to sum all elements in an array
const numbers2 = [10, 20, 30];
let sum=0; 
for(let i=0;i<numbers2.length;i++){
    sum=sum+numbers2[i]

 }
 console.log(sum)

//  . Iterate over array of objects and log name;


const users3 = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
users3.forEach((user)=>console.log(user.name))


// 4. Multiply each element by 2 using forEach
const numbers4 = [1, 2, 3];
numbers4.forEach((num)=>console.log(num*2))


// 5. Capitalize each word using for...of

const words5 = ['apple', 'banana', 'cherry'];
for (let word of words5){
  const capitalized=word[0].toUpperCase()+word.slice(1)
  console.log(capitalized)
}

// 6. Square each number using map
const numbers6 = [1, 2, 3, 4];
const newmap=numbers6.map((num)=>num*2)
console.log(newmap)


// 7. Celsius to Fahrenheit using map
const celsius7 = [0, 20, 30];
let result1=[];
let mult=0
for (let z=0;z<celsius7.length;z++){
    mult=(celsius7[z] * 9/5)+32
    result1.push(mult)
}
console.log("farenheit  :: ",result1)

// 8. Extract usernames using map
const users8 = [{ username: 'john' }, { username: 'jane' }];
const newArray5=users8.map((user)=>user.username)
console.log(newArray5)


// 9. Add isActive to each object
const users9 = [{ name: 'Tom' }, { name: 'Jerry' }];

const newArray6=users9.map((user)=>({
    ...user,
    isActive:true
}))

console.log(newArray6)

// 10. String lengths using map
const strings10 = ['apple', 'banana', 'kiwi'];
const newArray7=strings10.map((str)=>str.length)
console.log("string Length :: ",newArray7)


// 11. Filter even numbers
const numbers11 = [1, 2, 3, 4, 5, 6]

const newArray8=numbers11.filter((num)=>num%2===0)
console.log("Even Number :: ",newArray8)


// 12. Filter underage users
const users12 = [{ name: 'Tom', age: 17 }, { name: 'Jerry', age: 22 }];
const newArray9=users12.filter((user)=>user.age>18)
console.log("under age is not allowed ",newArray9)


// 13. Filter strings longer than 5 chars
const strings13 = ['cat', 'elephant', 'dog', 'dolphin'];

const newArray10=strings13.filter((str)=>str.length>5)
console.log(`string length greater than 5 char ${newArray10}`)


// 14. Remove falsy values
const mixed14 = [0, 'hello', false, '', 42, null, undefined];
const truthyValues = mixed14.filter(val => val);
console.log(truthyValues);






const str12="its practise time i am practise javascript";
 let maxWord = ""
    let maxLength = 0
   let  currentWord = ""
    let currentLength = 0
for (let w=0;w<str12.length;w++){
   let char=str12[w]
   if(char !==" " && w !==str12.length){
    currentWord=currentWord+char
    currentLength++
   }
   else{
    if(currentLength > maxLength){
        maxLength=currentLength
        maxWord=currentWord
    }
    currentWord=''
    currentLength=0
   }
}
console.log("Largest word is:", maxWord);