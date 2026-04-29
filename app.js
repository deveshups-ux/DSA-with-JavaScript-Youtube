let prompt = require("prompt-sync")();

//right rotation by k=2

let arr = [7, 2, 3, 0, 5];

for (let i = 1; i <= 2; i++) {
  let copy = arr[0];
  for (let j = 0; j < arr.length - 1; j++) {
    arr[j] = arr[j + 1];
  }
  arr[arr.length - 1] = copy;
}

console.log(arr);
