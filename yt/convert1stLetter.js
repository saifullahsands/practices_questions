function covertFirstletter(str) {
  let firsLetter = str.split(" ");
  const newArray = firsLetter.map((val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  });
  return newArray.join(" ");
}

console.log("first letter capital :: ", covertFirstletter("hello world"));
