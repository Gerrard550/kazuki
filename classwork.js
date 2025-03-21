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

// function numberCheck(x) {
//   if (x === 0) {
//     console.log("number is 0");
//   } else if (x % 2 === 0) {
//     console.log(` ${x} is Even`);
//   } else if (x % 2 !== 0) {
//     console.log(`${x} is Odd`);
//   }
// }

// numberCheck(-77);

// 1.	Write a program that checks if a given year is a leap year.
// 2.	Write a program that determines whether a person is eligible to vote based on their age.
// 3.	Write a program that compares two numbers and prints the larger one.
// 4.	Write a program that checks if a number is divisible by both 3 and 5.
// 5.	Write a program that determines whether a given character is a vowel or a consonant.
// 6.	Write a program that converts a temperature from Celsius to Fahrenheit.

function checkLeap(year) {
  if (year % 4 === 0) {
    console.log("year is a leap year");
  } else if (year % 4 !== 0) {
    console.log("year is not a leap year");
  }
}

checkLeap(1995);
