// // alert("Tbass is great");
// console.log();

// let bucket = "coke";
// console.log(bucket);
// bucket = "sprite";

// console.log(bucket);

const massMark = "78";
console.log(massMark);
const heightMark = "1.69";
console.log(heightMark);
const massJohn = "95";
console.log(massJohn);
const heightJohn = "1.88";
console.log(heightJohn);

const BMIMark = 78 / 1.69 ** 2;
const BMIJohn = 95 / 1.88 ** 2;
console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark > BMIJohn);

// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

// SOLUTION

// const scoreDolphins = (96 + 108 + 89 + 22) / 4;
// const scoreKoalas = (88 + 91 + 110 + 150) / 4;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphin wins");
// } else if (scoreDolphins < scoreKoalas) {
//   console.log("Koalas wins");
// } else {
//   console.log("Both wins the trophy🏆");
// }

// function multiply(a, b, c) {
//   return a * b * c;
// }
// console.log(multiply(2, 3, 4));
// console.log(multiply(-3, -4, -5));

// function tripple(a) {
//   return a * 3;
// }
// console.log(tripple(5));

// const multiplyArrow = (a, b, c) => {
//   return a * b * c;
// };
// console.log(multiplyArrow(3, 5, 10));

// const day = "";

// switch (day) {
//   case "monday":
//     console.log("go to Lagos");
//     console.log("go to Ibadan");
//     break;
//   case "tuedsay":
//     console.log("go to ikorodu");
//     break;
//   case "wednesday":
//     console.log("go to owerri");
//     break;
//   case "thursday":
//     console.log("go to kano");
//     break;
//   case "friday":
//     console.log("go to ife");
//   case "saturday":
//   case "sunday":
//     console.log("stay @ home");
//     break;
//   default:
//     console.log("illegal movement");
// }

// if (day === "monday") {
//   console.log("go to Lagos");
//   console.log("go to Ibadan");
// } else if (day === "tuesday") {
//   console.log("go to ikorodu");
// } else if (day === "wednesday") {
//   console.log("go to owerri");
// } else if (day === "thursday") {
//   console.log("go to kano");
// } else if (day === "friday") {
//   console.log("go to ife");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("stay @ home");
// } else {
//   console.log("illegal movement");
// }

// const number = [3, 6, 8, 12, 15];
// const halfNumber = number.map((t) => t * 0.5);
// console.log(halfNumber);

// const doubleNumber = number.map((t) => t * 2);
// console.log(doubleNumber);

// console.log(number[7]);

// 1. Print number 1 to 10
// 2. Multiply array by 10
// 3. Sum numbers from 1 to 5

for (let a = 1; a <= 10; a++) {
  console.log(a);
}

const newNumbers = [2, 4, 6, 8, 10, 11, 12, 16, 30];
for (let x = 0; x < newNumbers.length; x++) {
  console.log(newNumbers[x] * 10);
}

let multiply = 1;
for (let x = 1; x <= 10; x++) {
  multiply = multiply * x;
}
console.log(multiply);
