

function fibonacciSeries(num){
    let a=0;
    let b=1;
    for(let i=0;i<=num;i++){
      let temp=a+b
      a=b;
      b=temp
      console.log(temp)
    }
}

fibonacciSeries(5)