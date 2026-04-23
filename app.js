let pr = prompt("Enter Number  : ");

if (pr === null) {
  console.log("Cancelled");
} else {
  n = Number(pr);
  if (isNaN(n)) {
    console.log("Enter Valid Number...");
  } else {
    if (n > 0) {
      let isPrime = true;
      for (let i = 2; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
          isPrime = false;
        }
      }
      console.log(isPrime);
    } else {
      console.log("should be + and more than 0");
    }
  }
}
