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
      let copy = n;
      while (n > 0) {
        let rem = n % 10;
        let fact = 1;
        for (let i = 1; i <= rem; i++) {
          fact = fact * i;
        }
        sum = sum + fact;
        n = Math.floor(n / 10);
      }
      if (copy === sum) {
        console.log("Given Number --> Strong Number");
      } else {
        console.log("Given Number --> Not Strong Number");
      }
    } else {
      console.log("should be + and more than 0");
    }
  }
}
