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

// let unit = Number(prompt("Enter Your Electricity Unit : "));

// if (isNaN(unit)) {
//   console.log("Enter Valid Unit...");
// } else if (unit > 400) {
//   let bill = (unit - 400) * 13 + 200 * 8 + 100 * 6 + 100 * 4;
//   console.log(`Total Bill is ${bill}$`);
// } else if (unit > 201 && unit <= 400) {
//   let bill = (unit - 200) * 8 + 100 * 6 + 100 * 4;
//   console.log(`Total Bill is ${bill}$`);
// } else if (unit > 101 && unit <= 200) {
//   let bill = (unit - 100) * 6 + 100 * 4;
//   console.log(`Total Bill is ${bill}$`);
// } else if (unit > 0 && unit <= 100) {
//   let bill = unit * 4;
//   console.log(`Total Bill is ${bill}$`);
// } else {
//   console.log("Negative value is not valid...");
// }

// question 11 INR
// let money = Number(prompt("Enter The Amount : "));

// if (isNaN(money)) {
//   console.log("Enter valid cost...");
// }
// if (money >= 500) {
//   console.log(`500 Notes : ${Math.floor(money / 500)}`);
//   money = money % 500;
// }
// if (money >= 200) {
//   console.log(`200 Notes : ${Math.floor(money / 200)}`);
//   money = money % 200;
// }
// if (money >= 100) {
//   console.log(`200 Notes : ${Math.floor(money / 100)}`);
//   money = money % 100;
// }
// if (money >= 50) {
//   console.log(`50 Notes : ${Math.floor(money / 50)}`);
//   money = money % 50;
// }
// if (money >= 20) {
//   console.log(`20 Notes : ${Math.floor(money / 20)}`);
//   money = money % 20;
// }
// if (money >= 10) {
//   console.log(`10 Notes : ${Math.floor(money / 10)}`);
//   money = money % 10;
// }
// if (money >= 5) {
//   console.log(`5 Notes :  ${Math.floor(money / 5)}`);
//   money = money % 5;
// }
// if (money >= 2) {
//   console.log(`2 Notes : ${Math.floor(money / 2)}`);
//   money = money % 2;
// }
// if (money === 1) {
//   console.log(`1 Notes : ${Math.floor(money / 1)}`);
// }

//Switch statements

let player = "rudra";

switch (player) {
  case "dishant":
  case "rudra":
    console.log("Sniper King");
    break;
  case "devesh":
    console.log("All Rounder Player");
    break;
  case "blue":
    console.log("mag king");
    break;
  default:
    console.log("No Player");
}
