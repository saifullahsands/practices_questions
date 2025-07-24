function isBalanced(str) {
  let openeingBracket = ["(", "{", "["];
  let closingBracket = [")", "}", "]"];
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (openeingBracket.includes(char)) {
      stack.push(char);
    } else if (closingBracket.includes(char)) {
      if (stack.length === 0) return false;
      const top = stack.pop();
      const matcHIndex = closingBracket.indexOf(char);

      if (top !== openeingBracket[matcHIndex]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("{[(])}")); // false
console.log(isBalanced("((()))")); // true
console.log(isBalanced("[(])")); // false
console.log(isBalanced("{[()]}(){}")); // true
console.log(isBalanced("{[}"));
