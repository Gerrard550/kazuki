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

function multiply(a, b, c) {
  return a * b * c;
}
console.log(multiply(2, 3, 4));
console.log(multiply(-3, -4, -5));

function tripple(a) {
  return a * 3;
}
console.log(tripple(5));

const multiplyArrow = (a, b, c) => {
  return a * b * c;
};
console.log(multiplyArrow(3, 5, 10));
