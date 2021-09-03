var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
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
var index = 0;
function check() {
  if (index >= quesBank.length) {
    console.log("Thanks for playing");
    rl.close();
  } else {
    question();
  }
}
function question() {
  rl.question(quesBank[index].question, (answer) => {
    console.log(`You answered : ${answer}`);
    if (quesBank[index].answer.toLowerCase() == answer.toLowerCase()) {
      console.log("Right Answer!");
      index++;
      check();
    } else {
      console.log("Wrong Answer!");
      console.log("Try Again!");
      index = 0;
      check();
    }
  });
}
question();
