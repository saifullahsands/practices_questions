const PrimeNumber = (n) => {
  if (n === 1 || n === 0) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};


console.log(PrimeNumber(5))
console.log(PrimeNumber(6))
console.log(PrimeNumber(7))

