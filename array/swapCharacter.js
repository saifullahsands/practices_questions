function swapCase(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Check if character is uppercase
    if (char === char.toUpperCase()) {
      // Convert to lowercase
      result = result+char.toLowerCase();
    } else {
      // Convert to uppercase
      result = result+char.toUpperCase();
    }
  }

  return result;
}

// Example usage:
let input = 'The Quick Brown Fox';
console.log(swapCase(input));  // Output: tHE qUICK bROWN fOX
