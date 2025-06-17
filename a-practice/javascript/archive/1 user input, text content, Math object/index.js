//------------------------------------

// // accepting user input with window prompt (with data conversion)
// let username = window.prompt("Enter your name:");
// let age = window.prompt("Enter your age:");
// age = Number(age);
// age += 1;
// console.log(`Hello ${username}, next year you'll be ${age}!`);

//------------------------------------

// // accepting user input with textbox (with HTML text injection)
// const PI = 3.14159;
// let radius, circumference;
// document.getElementById("myButton").onclick = function () {
//   radius = document.getElementById("myTextbox").value;
//   radius = Number(radius);
//   circumference = 2 * PI * radius;
//   document.getElementById("myHeader").textContent += ` ${circumference}`;
//   console.log("Circumference is", circumference);
// };

//------------------------------------

// // // Math object
// let x = 25;
// let y = 34;
// let z = 91;

// // z = Math.round(x);
// // z = Math.floor(x);
// // z = Math.ceil(x);
// // z = Math.trunc(x);
// // z = Math.pow(x, 2);
// // z = Math.sqrt(x);
// // z = Math.abs(x);

// // random number generator
// const button = document.getElementById("myButton");
// const label = document.getElementById("myLabel");

// const min = 1;
// const max = 6;
// let randomNum;

// button.onclick = function () {
//   randomNum = Math.floor(Math.random() * max);
//   label.textContent = randomNum;
// };

//------------------------------------

// decrease - reset - increase
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
