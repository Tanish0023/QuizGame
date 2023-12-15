const questionJSON = [
  {
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "Atlanta United",
    options: [
      "Atlanta United",
      "Atlanta Impact",
      "Atlanta Bulls",
      "Atlanta Stars",
    ],
    question: "Which of these is a soccer team based in Atlanta?",
  },
  {
    correctAnswer: "A Nanny",
    options: ["A Sow", "A Lioness", "A Hen", "A Nanny"],
    question: "A female goat is known as what?",
  },
  {
    correctAnswer: "P. L. Travers",
    options: [
      "J. R. R. Tolkien",
      "P. L. Travers",
      "Lewis Carroll",
      "Enid Blyton",
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];

function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

function nextQue() {
  currentQue++;
  optionsElement.textContent = "";

  if (currentQue >= questionJSON.length) {
    questionElement.textContent = "Quiz Completed!!";
    nextElement.remove();
  } else {
    showQuestion();
  }
}

let score = 0;
let currentQue = 0;
const totalScore = questionJSON.length;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const correctAnswerElement = document.getElementById("correctAnswer");
const scoreElement = document.getElementById("score");
const nextElement = document.getElementById("next");

function showQuestion() {
  //Deconstruction of option
  const { correctAnswer, options, question } = questionJSON[currentQue];

  questionElement.textContent = question;
  const shuffledOption = shuffleOptions(options);

  shuffledOption.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    optionsElement.appendChild(btn);

    //Event Handling of options button
    btn.addEventListener("click", () => {
      if (option === correctAnswer) {
        score += 1;
      } else {
        score -= 0.25;
      }
      scoreElement.textContent = `Score: ${score}/${totalScore}`;
      nextQue();
    });
  });
}

showQuestion();

nextElement.addEventListener("click", () => {
  scoreElement.textContent = `Score: ${score}/${totalScore}`;
  nextQue();
});
