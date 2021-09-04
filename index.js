const quesBank = [
  {
    question: `What is the technical term for planting seeds?
    a. Germinating
    b. Sowing
    c. Xeriscaping
    d. Fertilizing\n`,
    answer: "b",
  },
  {
    question: `Which of these nutrients do plants not get from the soil?
    a. Phosphorus
    b. Nitrogen
    c. Potassium
    d. Carbon\n`,
    answer: "d",
  },
  {
    question: `Which of these insects is not considered beneficial to a garden?
    a. Ladybugs
    b. Spiders
    c. Bumblebees
    d. Grasshoppers\n`,
    answer: "d",
  },
  {
    question: `Which of these is a shade plant?
    a. Fern
    b. Peony
    c. Daylily
    d. Lavender\n`,
    answer: "a",
  },
  {
    question: `Which of these plants loves sunlight?
    a. Areca Palm
    b. Ponitail Palm
    c. Croton
    d. Aglonema\n`,
    answer: "b",
  },
];
var readlineSync = require("readline-sync");
var username = readlineSync.question("What is your name? ");
console.log("Welcome", username, "to the gardening quiz.");
console.log("-----------------------------------------------");
var score = 0;

function questions(ques, ans) {
  var userAnswer = readlineSync.question(ques);
  if (ans.toLowerCase() == userAnswer.toLowerCase()) {
    console.log("Right Answer!");
    score++;
  } else {
    console.log("Wrong Answer!");
  }
}
for (var i = 0; i < quesBank.length; i++) {
  questions(quesBank[i].question, quesBank[i].answer);
}
console.log("Your Score is: ", score);
console.log("Thanks for playing");
