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

// function alphabet(character) {
//   if ((character === a, e, i, o, u)) {
//     console.log("character is vowel");
//   } else {
//     console.log("character is consonant");
//   }
// }

// character(a)

//
// ARRAY DESTRUCTURE

const league = {
  name: "English Premier League",
  country: "England",
  teams: [
    "Manchester United",
    "Manchester City",
    "Liverpool",
    "Arsenal",
    "Chelsea",
    "Tottenham Hotspur",
    "Newcastle United",
    "Aston Villa",
    "West Ham United",
    "Brighton & Hove Albion",
  ],
};
console.log(league.name);
console.log(league.country);
const [firstTeam, , thirdTeam, ,] = league.teams;
console.log(firstTeam, thirdTeam);

const mydreamCountry = league.country;
console.log(mydreamCountry);

// SPREAD OPERATOR
// Join two arrays and shallow copy
const numArray = [5, 9, 8, 5, 3];
const newArray = [2, 7, ...numArray];
console.log(newArray);

const shallowCopy = [...numArray];
shallowCopy.push(25);

console.log(shallowCopy);
console.log(numArray);
shallowCopy.shift();
console.log(shallowCopy);

const vowels = ["a", "e", "i"];
const consonants = ["k", "l", "m"];
const alpha = [...vowels, ...consonants];
console.log(alpha);

const shallowAlpha = [...alpha];
console.log(shallowAlpha);

function compareNumb(x, y) {
  if (x > y) {
    console.log(`${x} is greater than ${y}`);
  } else if (x < y) {
    console.log(`${x} is lesser than ${y}`);
  } else {
    console.log(`${x} equals to ${y}`);
  }
}

compareNumb(20, 20);
