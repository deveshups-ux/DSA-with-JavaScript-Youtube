let prompt = require("prompt-sync")();

// //left rotation by k steps

// let arr = [7, 2, 3, 0, 5];

// let k = Number(prompt("Enter The Number"));

// k = k % arr.length;

// for (let i = 1; i <= k; i++) {
//   let copy = arr[0];
//   for (let j = 0; j < arr.length - 1; j++) {
//     arr[j] = arr[j + 1];
//   }
//   arr[arr.length - 1] = copy;
// }

// console.log(arr);

//right rotation by k steps

// let arr = [7, 2, 3, 0, 5];

// let k = Number(prompt("Enter The Number"));

// k = k % arr.length;

// for (let i = 1; i <= k; i++) {
//   let copy = arr[arr.length - 1];
//   for (let j = arr.length - 1; j > 0; j--) {
//     arr[j] = arr[j - 1];
//   }
//   arr[0] = copy;
// }

// console.log(arr);

// Right Approach to left rotation by k step

// let arr = [7, 2, 3, 0, 5];
// let temp = new Array(arr.length);
// let k = Number(prompt("Enter K Value : "));
// k = k % arr.length;

// for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }
// console.log(temp);

// Besttttttttttttttt Approach to left rotation by K steps

let arr = [2, 4, 5, 4, 3, 7, 2, 3, 0, 5];

let k = Number(prompt("Enter K value : "));

k = k % arr.length;

function reverse(i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

//first function
reverse(0, k - 1);

//second function
reverse(k, arr.length - 1);

//last(third) function
reverse(0, arr.length - 1);

console.log(arr);
