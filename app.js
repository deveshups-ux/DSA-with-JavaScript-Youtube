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

// let totalPrice = Number(prompt("Enter Total Ammount : "));
// console.log(totalPrice);
// let discount = 0;

// if (Number.isNaN(totalPrice)) {
//   console.log("Enter Valid Price...");
// } else if (0 < totalPrice && totalPrice <= 5000) {
//   discount = 0;
// } else if (5001 < totalPrice && totalPrice <= 7000) {
//   discount = 5;
// } else if (7001 < totalPrice && totalPrice <= 9000) {
//   discount = 10;
// } else if (totalPrice > 9001) {
//   discount = 20;
// }

// console.log(
//   ` You Got ${discount}% discount the total price is   ${totalPrice - Math.trunc((totalPrice * discount) / 100)}`,
// );

// let otp = Math.trunc(Math.random() * 90000 + 10000);
// console.log(otp);

//question 10

let unit = Number(prompt("Enter Your Electricity Unit : "));

if (isNaN(unit)) {
  console.log("Enter Valid Unit...");
} else if (unit > 400) {
  let bill = (unit - 400) * 13 + 200 * 8 + 100 * 6 + 100 * 4;
  console.log(`Total Bill is ${bill}$`);
} else if (unit > 201 && unit <= 400) {
  let bill = (unit - 200) * 8 + 100 * 6 + 100 * 4;
  console.log(`Total Bill is ${bill}$`);
} else if (unit > 101 && unit <= 200) {
  let bill = (unit - 100) * 6 + 100 * 4;
  console.log(`Total Bill is ${bill}$`);
} else if (unit > 0 && unit <= 100) {
  let bill = unit * 4;
  console.log(`Total Bill is ${bill}$`);
} else {
  console.log("Negative value is not valid...");
}
