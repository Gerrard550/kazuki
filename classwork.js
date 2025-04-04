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

// function checkLeap(year) {
//   if (year % 4 === 0) {
//     console.log("year is a leap year");
//   } else if (year % 4 !== 0) {
//     console.log("year is not a leap year");
//   }
// }

// checkLeap(1995);

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

// const league = {
//   name: "English Premier League",
//   country: "England",
//   teams: [
//     "Manchester United",
//     "Manchester City",
//     "Liverpool",
//     "Arsenal",
//     "Chelsea",
//     "Tottenham Hotspur",
//     "Newcastle United",
//     "Aston Villa",
//     "West Ham United",
//     "Brighton & Hove Albion",
//   ],
// };
// console.log(league.name);
// console.log(league.country);
// const [firstTeam, , thirdTeam, ,] = league.teams;
// console.log(firstTeam, thirdTeam);

// const mydreamCountry = league.country;
// console.log(mydreamCountry);

// // SPREAD OPERATOR
// // Join two arrays and shallow copy
// const numArray = [5, 9, 8, 5, 3];
// const newArray = [2, 7, ...numArray];
// console.log(newArray);

// const shallowCopy = [...numArray];
// shallowCopy.push(25);

// console.log(shallowCopy);
// console.log(numArray);
// shallowCopy.shift();
// console.log(shallowCopy);

// const vowels = ["a", "e", "i"];
// const consonants = ["k", "l", "m"];
// const alpha = [...vowels, ...consonants];
// console.log(alpha);

// const shallowAlpha = [...alpha];
// console.log(shallowAlpha);

// function compareNumb(x, y) {
//   if (x > y) {
//     console.log(`${x} is greater than ${y}`);
//   } else if (x < y) {
//     console.log(`${x} is lesser than ${y}`);
//   } else {
//     console.log(`${x} equals to ${y}`);
//   }
// }

// compareNumb(20, 20);

// // QUESTIONS
// 7.	What is JavaScript used for?
// 8.	How do you declare a variable in JavaScript?
// 9.	What is the difference between let, const, and var?
// 10.	How do you write a function in JavaScript?
// 11.	What is the difference between == and === in JavaScript?
// 12.	What is an array in JavaScript? How do you create one?
// 13.	How do you add and remove elements from an array?
// 14.	What is the difference between null and undefined?
// 15.	How do you check the data type of a variable in JavaScript?

// console.log(a);
// let a = 22;
// let f = null;
// console.log(f);
// console.log(a);
// const b = 27;
// console.log(z);
// var z = 33;

// a = 33;
// console.log(a);

// function myCountry(x) {
//   if ((x = 0)) {
//   }
// }

// console.log("5" === 5);

// x = ["4", 6, 9, "Tbazz", null, undefined, true, false, [1, 2]];
// console.log(x);

// //SHORT CIRCUTING
// // || operator....it returns the first truthy value, or the last value if none is true

// console.log(undefined || null || NaN || 0 || "");

// //  && operator returns the first falsy value or the last value if all are true

// const eplTeams = [
//   "Arsenal",
//   "Aston Villa",
//   "Bournemouth",
//   "Brentford",
//   "Brighton & Hove Albion",
//   "Burnley",
//   "Chelsea",
//   "Crystal Palace",
//   "Everton",
//   "Fulham",
//   "Liverpool",
//   "Luton Town",
//   "Manchester City",
//   "Manchester United",
//   "Newcastle United",
//   "Nottingham Forest",
//   "Sheffield United",
//   "Tottenham Hotspur",
//   "West Ham United",
// ];

// for (const num of eplTeams.entries()) {
//   console.log(`Position ${num[0] + 1} is ${num[1]}`);
// }

// const checkClass = (arm) => {
//   const individualClass = arm.slice(-1);
//   if (individualClass === "a" || individualClass === "b") {
//     console.log("na science class");
//   } else if (individualClass === "c" || individualClass === "d") {
//     console.log("Na commercial student");
//   } else if (individualClass === "e" || individualClass === "f") {
//     console.log("na Arts students");
//   } else {
//     console.log("na mechanic");
//   }
// };
// checkClass("5b");
// checkClass("5c");
// checkClass("5e");
// checkClass("5p");

// const checkCountry = (check) => {
//   const nationality = check.slice(-2);
//   if (nationality === "ng") {
//     console.log("Is a Nigerian");
//   } else if (nationality === "gh") {
//     console.log("Is a Ghanian");
//   } else if (nationality === "us") {
//     console.log("Is an American");
//   } else {
//     console.log("Is an Ijebu");
//   }
// };

// checkCountry("2563ng");
// checkCountry("2563gh");
// checkCountry("2563us");
// checkCountry("2563pp");

// function checkInput(myState) {
//   const realState = myState.trim().toLowerCase();
//   return (
//     realState[0].toUpperCase() +
//     realState.slice(1, -1) +
//     realState[myState.length - 1].toUpperCase()
//   );
// }

// console.log(checkInput("lagos"));

// const usaStates = [
//   "Alabama",

//   "Alaska",

//   "Arizona",

//   "Arkansas",

//   "California",

//   "Colorado",

//   "Connecticut",

//   "Delaware",

//   "Florida",

//   "Georgia",

//   "Hawaii",

//   "Idaho",

//   "Illinois",

//   "Indiana",

//   "Iowa",

//   "Kansas",

//   "Kentucky",

//   "Louisiana",

//   "Maine",

//   "Maryland",

//   "Massachusetts",

//   "Michigan",

//   "Minnesota",

//   "Mississippi",

//   "Missouri",

//   "Montana",

//   "Nebraska",

//   "Nevada",

//   "New Hampshire",

//   "New Jersey",

//   "New Mexico",

//   "New York",

//   "North Carolina",

//   "North Dakota",

//   "Ohio",

//   "Oklahoma",

//   "Oregon",

//   "Pennsylvania",

//   "Rhode Island",

//   "South Carolina",

//   "South Dakota",

//   "Tennessee",

//   "Texas",

//   "Utah",

//   "Vermont",

//   "Virginia",

//   "Washington",

//   "West Virginia",

//   "Wisconsin",

//   "Wyoming",
// ];

// // for (const num of usaStates.entries()) {
// //   console.log(`Position ${num[0] + 1} is ${num[1]}`);
// // }

// for (const brief of usaStates.entries()) {
//   console.log(`${brief[0] + 1}th state is ${brief[1]}`);
// }

// const numbers = [3, 5, 7, 9, 13, 15];
// const doubleNum = numbers.map((w) => {
//   return w * 2;
// });
// console.log(numbers);
// console.log(doubleNum);

// const greaterNum = numbers.filter((q) => {
//   return q > 3 && q < 9;
// });
// console.log(greaterNum);

// const multiplyNum = numbers.reduce((b, c) => {
//   return b * c;
// }, 1);

// console.log(multiplyNum);

// const newNum = [1, 2, 3, 4, 5];
// let doubleNewnum = newNum.map((a) => {
//   return a * 2;
// });

// doubleNewnum = doubleNewnum.filter((x) => {
//   return x < 8;
// });

// doubleNewnum = doubleNewnum.reduce((c, d) => {
//   return c + d;
// }, 0);
// console.log(doubleNewnum);

// const output = newNum
//   .map((x) => x * 2)
//   .filter((x) => x < 8)
//   .reduce((a, b) => a + b, 0);
// console.log(output);

console.log(
  "1. Write a function that determines whether a given number is positive or negative."
);

function detNumber(x) {
  if (x > 0) {
    console.log(`${x} is a positive number`);
  } else if (x < 0) {
    console.log(`${x} is a negative number`);
  } else {
    console.log("number is 0");
  }
}
detNumber(22);
detNumber(12);
detNumber(1);
detNumber(0);
detNumber(-1);
detNumber(-20);
console.log(" ");

console.log("2. Write a function that checks if a number is even or odd.");

function checkNum(y) {
  if (y === 0) {
    console.log("number is 0");
  } else if (y % 2 === 0) {
    console.log(`${y} is Even`);
  } else if (y % 2 !== 0) {
    console.log(`${y} is Odd`);
  }
}
checkNum(7);
checkNum(9);
checkNum(22);
checkNum(2);
checkNum(0);

console.log(" ");

console.log(
  "3. ⁠Write a function that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”)."
);

function transNumerical(grade) {
  if (grade >= 70 && grade < 100) {
    console.log(`Grade is A = ${grade}`);
  } else if (grade >= 60 && grade <= 69) {
    console.log(`Grade is B = ${grade}`);
  } else if (grade >= 50 && grade <= 59) {
    console.log(`Grade is C = ${grade} `);
  } else if (grade >= 45 && grade <= 49) {
    console.log(`Grade is D = ${grade}`);
  } else if (grade >= 40 && grade <= 44) {
    console.log(`Grade is E= ${grade}`);
  } else {
    console.log(`Grade ${grade} will repeat class`);
  }
}
transNumerical(80);
transNumerical(60);
transNumerical(50);
transNumerical(46);
transNumerical(42);
transNumerical(20);

console.log(" ");
// 4. Write a function that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

function priceTickets(ageGroup) {
  if (ageGroup <= 12) {
    console.log(`Age ${ageGroup} pays a ticket price if 5`);
  } else if (ageGroup <= 18) {
    console.log(`Age ${ageGroup} pays a ticket price of 10`);
  } else if (ageGroup <= 60) {
    console.log(`Age ${ageGroup} pays a ticket price of 15`);
  } else {
    console.log(`Age ${ageGroup} pays nothing`);
  }
}

priceTickets(6);
priceTickets(15);
priceTickets(59);
priceTickets(75);

console.log(" ");

// 5. Write a function that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

function purchaseDiscount(amount) {
  if (amount >= 100) {
    console.log(`Prices ${amount} have a discount of 20`);
  } else if (amount >= 50) {
    console.log(`Prices ${amount} have a discount of 10`);
  } else {
    console.log("Prices have no discount");
  }
}

purchaseDiscount(150);
purchaseDiscount(65);
purchaseDiscount(10);
console.log(" ");
// 6. Write a simple number guessing function. Provide a secret number and a guess. Based on those numbers give players clues if their guess is higher, lower or correct.

function numbCheck(secretNum, guessNum) {
  if (secretNum > guessNum) {
    console.log("guess is lower");
  } else if (guessNum > secretNum) {
    console.log("guess is higher");
  } else if (secretNum === guessNum) {
    console.log("guess is correct");
  } else {
    console.log("invalid guess");
  }
}

numbCheck(2, 9);
numbCheck(9, 2);
numbCheck(9, 9, 5);
numbCheck(10);
