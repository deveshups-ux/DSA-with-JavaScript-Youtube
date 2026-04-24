let computerNum = Math.floor(Math.random() * 100) + 1;

let userNum;

while (true) {
  let input = prompt("Guess the Number (1-100):");

  if (input === null) {
    console.log("Game Cancelled");
    break;
  }

  userNum = Number(input);

  if (isNaN(userNum) || userNum < 1 || userNum > 100) {
    console.log("Enter valid number between 1 to 100");
    continue;
  }

  if (userNum > computerNum) {
    console.log("Too High");
  } else if (userNum < computerNum) {
    console.log("Too Low");
  } else {
    console.log("Congratulations... ❤️");
    break;
  }
}
