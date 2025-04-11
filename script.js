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

// for (let a = 1; a <= 10; a++) {
//   console.log(a);
// }

// const newNumbers = [2, 4, 6, 8, 10, 11, 12, 16, 30];
// for (let x = 0; x < newNumbers.length; x++) {
//   console.log(newNumbers[x] * 10);
// }

// let multiply = 1;
// for (let x = 1; x <= 10; x++) {
//   multiply = multiply * x;
// }
// console.log(multiply);

// let substract = 1;
// for (let y = 1; y <= 5; y++) {
//   substract = substract - y;
// }
// console.log(substract);

// DOM document object model

// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".check").addEventListener("click", () => {
//   const userGuess = Number(document.querySelector(".guess").value);

//   if (!userGuess) {
//     document.querySelector(".message").innerHTML =
//       "Input a valid number in the box";
//   } else if (userGuess === secretNumber) {
//     document.querySelector(".message").innerHTML = "You don get am! Hurray 🥇";
//     document.querySelector(".message").style.backgroundColor = "green";
//   } else if (userGuess > 20) {
//     document.querySelector(".message").innerHTML =
//       " eye dey pain you? we say between 1 and 20";
//   } else if (userGuess > secretNumber) {
//     document.querySelector(".message").innerHTML = "guess too high";
//   } else if (userGuess < secretNumber) {
//     document.querySelector(".message").innerHTML = "guess too low";
//   }
// });

const restaurant = {
  name: "Classico Italiano",
  location: "Visa Angelo Tavanti 23, Firenze, Italy",
  categories: [
    "Focaccia",
    "Brushetta",
    "Garlic bread",
    "Caprese Salad",
    "Amala",
  ],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};
// console.log(restaurant.name);
// const [firstMeal, , , , thirdMeal] = restaurant.categories;
// console.log(firstMeal, thirdMeal);
// const myBestfood = restaurant.mainMenu;
// console.log(myBestfood);

// let [firstMeal, , thirdMeal] = restaurant.categories;
// console.log(firstMeal, thirdMeal);

// [firstMeal, thirdMeal] = [thirdMeal, firstMeal];
// console.log(firstMeal, thirdMeal);

// const nested = [2, 4, [7, 8]];
// // const [a, , b] = nested;
// const [a, , [b, c]] = nested;
// console.log(a, b, c);

// const newFood = [...restaurant.categories, "Garri", "Semo"];
// console.log(newFood);

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

// WHILE LOOP

// let rep = 1;
// while (rep < 11) {
//   console.log(`done ${rep} number of times`);
//   rep++;
// }
// // FOR-OF
// const number = [2, 4, 6, 8, 10];
// for (const gray of number) {
//   console.log(gray * 10);
// }

const fruits = ["apple", "banana", "mango"];
for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 1. Write a for loop that prints numbers from 1 to 20.

// 2.Modify the for loop to print only even numbers from 2 to 10.

// 3.Write a for loop that iterates through an array ["apple", "banana", "cherry"] and logs each fruit.

// for (var num = 2; num < 10; num = num + 2) {
//   console.log(num);
// }

//menu items
// Chocolate Cake​
// Vanilla Cake​
// Red Velvet Cake​
// Lemon Drizzle Cake​
// Carrot Cake​
// Black Forest Cake

//Receive Order
//​Prepare Ingredients
// Bake Cake​
// Cool Cake​
// Package Cake​
// Deliver Cake
// makePayMent
//thank you for choosing us.

const menu = {
  cake: ["medium", "large"],
  flavour: ["vanila", "orange"],
  size: ["small", "biggi"],
  design: ["froest", "catoon"],
  coluor: ["red", "mixedColour"],
  topping: ["icecream", "agbalomoTop"],
};

function receiveOder(
  order,
  select_large,
  select_orange,
  select_catoon,
  select_red,
  select_icecream
) {
  setTimeout(() => {
    console.log("we recived your order");
    order(
      select_large,
      select_orange,
      select_catoon,
      select_red,
      select_icecream
    );
  }, 1000);
}
function prepareIngredient(
  select_large,
  select_orange,
  select_catoon,
  select_red,
  select_icecream
) {
  setTimeout(() => {
    console.log("ingredient available for use");
    setTimeout(() => {
      console.log(`we are preparing ${menu.cake[select_large]} cake`);
      setTimeout(() => {
        console.log(` baking  ${menu.flavour[select_orange]} flavour cake`);
        setTimeout(() => {
          console.log(
            `we are making a ${menu.design[select_catoon]} design cake`
          );
          setTimeout(() => {
            console.log(`with a  ${menu.coluor[select_red]}  fundant`);
            setTimeout(() => {
              console.log(
                `also coming with  ${menu.topping[select_icecream]} topping.`
              );
              setTimeout(() => {
                console.log("verifing payment");
                setTimeout(() => {
                  console.log("Thanks for your patronage");
                }, 1000);
              }, 1000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 1000);
  }, 1500);
}
receiveOder(prepareIngredient, 1, 1, 1, 0, 0, 0);
