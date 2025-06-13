// ctrl + opt + N => to run the code
// option + click -> multicursor;
// option + down arrow | up arrow -> move line;
// shift + option + down arrow -> duplicate line;
// command + d -> select next occurrence;
// command + shift + l -> select all occurrences;

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
