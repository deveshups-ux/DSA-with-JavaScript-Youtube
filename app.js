// Question 1

let i = 11;
i = i++ + ++i;  // i = 11 + 13 = 24
console.log(i);


// Question 2

let a = 11, b = 22;

// c = a + b + a++ + b++ + ++a + ++b

// Step 1: a = 11 → use → sum = 11
// Step 2: b = 22 → use → sum = 11 + 22 = 33

// Step 3: a++ → use 11, then a = 12 → sum = 33 + 11 = 44
// Step 4: b++ → use 22, then b = 23 → sum = 44 + 22 = 66

// Step 5: ++a → a = 13, use 13 → sum = 66 + 13 = 79
// Step 6: ++b → b = 24, use 24 → sum = 79 + 24 = 103

let c = 103;

console.log("a =", a); // 13
console.log("b =", b); // 24
console.log("c =", c); // 103