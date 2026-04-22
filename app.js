// let totalPrice = Number(prompt("Enter Total Ammount : "));
// console.log(totalPrice);

// if (Number.isNaN(totalPrice)) {
//   console.log("Enter Valid Price...");
// } else if (0 < totalPrice && totalPrice <= 5000) {
//   let finalPrice = totalPrice;
//   console.log(
//     `You Got 0% discount then Your Current Bill Price is ${finalPrice}  `,
//   );
// } else if (5001 < totalPrice && totalPrice <= 7000) {
//   let discount = Math.floor((totalPrice * 5) / 100);
//   let finalPrice = totalPrice - discount;
//   console.log(
//     `You Got 5% discount then Your Current Bill Price is ${finalPrice}  `,
//   );
// } else if (7001 < totalPrice && totalPrice <= 9000) {
//   let discount = Math.floor((totalPrice * 10) / 100);
//   let finalPrice = totalPrice - discount;
//   console.log(
//     `You Got 10% discount then Your Current Bill Price is ${finalPrice}  `,
//   );
// } else if (totalPrice > 9001) {
//   let discount = Math.floor((totalPrice * 15) / 100);
//   let finalPrice = totalPrice - discount;
//   console.log(
//     `You Got 15% discount then Your Current Bill Price is ${finalPrice}  `,
//   );
// }

let totalPrice = Number(prompt("Enter Total Ammount : "));
console.log(totalPrice);
let discount = 0;

if (Number.isNaN(totalPrice)) {
  console.log("Enter Valid Price...");
} else if (0 < totalPrice && totalPrice <= 5000) {
  discount = 0;
} else if (5001 < totalPrice && totalPrice <= 7000) {
  discount = 5;
} else if (7001 < totalPrice && totalPrice <= 9000) {
  discount = 10;
} else if (totalPrice > 9001) {
  discount = 20;
}

console.log(
  ` You Got ${discount}% discount the total price is   ${totalPrice - Math.trunc((totalPrice * discount) / 100)}`,
);

// let otp = Math.trunc(Math.random() * 90000 + 10000);
// console.log(otp);
