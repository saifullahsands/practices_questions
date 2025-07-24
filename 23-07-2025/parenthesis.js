const parenthesis = (str) => {
  let maxcount = 0;
  let count = 0;
  for (let i = 0; i < str.length; i++) {           
    if (str[i] === "(" && str[i + 1] === ")") {
      count++;
      i++;
    }else{
        count=0
    }
    if (count > maxcount) {
      maxcount = count;
    }
  }
  return maxcount;
};

const str = "((())()))()))((())()()()()())))()";
console.log(parenthesis(str));
