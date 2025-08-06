// const arr=[3, 4, 5, 1, 2]

// const findMinimum=(arr)=>{
//     let left=0
//     let right=arr.length-1

//     while(left<right){
//         let mid=Math.floor((left+right)/2)
//         if(arr[mid] > arr[right]){
//                 left=mid+1
//         }
//         else{
//             right=mid
//         }

//     }
//     return arr[left]

// }

// console.log(findMinimum(arr));

const dataArray = [
  {
    name: "Hell",
    price: 0,
    currency: "Dollar",
  },
  {
    name: "Se",
    price: 0,
    currency: "Euro",
  },
  {
    name: "Sell",
    price: 0,
    currency: "Pound",
  },

];


// const newFunction=(dataArray)=>{
// const newArray=dataArray.map((item)=>{
//      let largeValue=0;
//     let convertPrice=item.price
    
//     if(item.currency==="Dollar"){
//       convertPrice=item.price*250
//       if(convertPrice>largeValue){
//            largeValue=convertPrice

//       }
      
//     }
//     if(item.currency==="Pound"){
//        convertPrice= item.price * 400
//         if(convertPrice>largeValue){
//         largeValue=convertPrice;
//       }
      
//     }
//     if(item.currency==="Euro"){
//         convertPrice=item.price*160
//          if(convertPrice>largeValue){
//         largeValue=convertPrice;

//       }
    
//     }
   
//     if(convertPrice>largeValue){
//       largeValue=convertPrice
//     }
//     return  {...item,convertPrice,largeValue}
   
// })

// newArray.sort((a,b)=>b.largeValue-a.largeValue)

// // if(largeValue===0){
// //   return "hello"
// // }

// if(newArray[0].largeValue==0){
//   return "hello world"
// }
// return newArray[0]

// }

// console.log(newFunction(dataArray))

function getMaxConvertedPrice(dataArray,index=0){

  if(index===dataArray.length) return 0
  let convertPrice=0;
  let current=dataArray[index]
  switch (current.currency) {
    case "Dollar":
      convertPrice=current.price *2
      break;
    case "Euro":
      convertPrice=current.price *3;
      break;
      case "Pound":
        convertPrice=current.price * 4;
        break;
        case "Rupee":
          convertPrice=current.price
          break
    default:
      convertPrice=0
      break;
  }

  return Math.max(convertPrice,getMaxConvertedPrice(dataArray,index+1))
}

const dataArray1 = [
  { name: "A", price: 5, currency: "Dollar" }, // 500
  { name: "B", price: 3, currency: "Euro" },   // 900
  { name: "C", price: 4, currency: "Pound" },  // 800
];

console.log(getMaxConvertedPrice(dataArray1));