let prompt = require("prompt-sync")();

let n = prompt("enter the number ");

// for (let i = 1; i <= n; i++) {
//   let ascii = 65;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(ascii) + " ");
//     ascii++;
//   }
//   console.log();
// }
for (let i = 1; i <= n; i++) {
  //spaces
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  //stars
  for (let k = 1; k <= i; k++) {
    process.stdout.write("*");
  }
  console.log();
}
