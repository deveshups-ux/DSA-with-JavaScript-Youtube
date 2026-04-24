let pr = prompt("Enter Number  : ");

if (pr === null) {
  console.log("Cancelled");
} else {
  n = Number(pr);
  if (isNaN(n)) {
    console.log("Enter Valid Number...");
  } else {
    if (n > 0) {
      let sum = 0;
      while (n > 0) {
        let rem = n % 10;
        sum = sum + rem;
        n = Math.floor(n / 10);
      }
      console.log(sum);
    } else {
      console.log("should be + and more than 0");
    }
  }
}
