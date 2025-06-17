// ctrl + opt + N => to run the code
// option + click -> multicursor;
// option + down arrow | up arrow -> move line;
// shift + option + down arrow -> duplicate line;
// command + d -> select next occurrence;
// command + shift + l -> select all occurrences;

const button = document.getElementById("myButton");
const input = document.getElementById("myInput");
const resultParagraph = document.getElementById("myResult");

let age;
let message;

button.onclick = function () {
  age = Number(input.value);

  if (age < 90) {
    message = "You're too young!";
  } else {
    message = "You're too old!";
  }

  resultParagraph.textContent = message;
};
