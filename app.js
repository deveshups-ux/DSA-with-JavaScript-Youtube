let prompt = require("prompt-sync")();

//left rotation by k steps

let arr = [7, 2, 3, 0, 5];

let k = Number(prompt("Enter The Number"));

k = k % arr.length;

for (let i = 1; i <= k; i++) {
  let copy = arr[0];
  for (let j = 0; j < arr.length - 1; j++) {
    arr[j] = arr[j + 1];
  }
  arr[arr.length - 1] = copy;
}

console.log(arr);
