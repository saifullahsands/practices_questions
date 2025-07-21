function armstrongNumber(num){
    let temp=num
    let lengthOfDigit=num.toString().length;
    let sum=0;
    while(temp>0){
        let digit=temp%10;
        sum=sum+digit **lengthOfDigit
        temp = Math.floor(temp / 10);
    }
      if (sum === num) {
        console.log(num + " is an Armstrong number");
    } else {
        console.log(num + " is NOT an Armstrong number");
    }
}

armstrongNumber(5)