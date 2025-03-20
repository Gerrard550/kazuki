// console.log("work");

// agbowuro toyin
// 2:03 AM
// 1. Write a program that determines whether a given number is positive or negative.
// 2. Write a program that checks if a number is even or odd.
// 3. ⁠Write a program that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”).

// let number = 0;
// if (number > 0) {
//   console.log("number is positive");
// } else if (number < 0) {
//   console.log("number is negative");
// }
// function numberCheck(a) {
//   if (a > 0) {
//     console.log(`${a} is positive`);
//   } else if (a < 0) {
//     console.log("number is negative");
//   } else {
//     console.log("number is 0");
//   }
// }

// numberCheck(8);
// const numberChecker = () => {};

function numberCheck(x) {
  if (x === 0) {
    console.log("number is 0");
  } else if (x % 2 === 0) {
    console.log(` ${x} is Even`);
  } else if (x % 2 !== 0) {
    console.log(`${x} is Odd`);
  }
}

numberCheck(-77);
