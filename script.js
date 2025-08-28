const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "C", "Java", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
    answer: "Cascading Style Sheets"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  optionsEl.innerHTML = "";

  currentQuiz.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.onclick = () => selectAnswer(option);
    optionsEl.appendChild(button);
  });
}

function selectAnswer(selected) {
  const correctAnswer = quizData[currentQuestion].answer;
  if (selected === correctAnswer) {
    score++;
  }
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.textContent = `You scored ${score} out of ${quizData.length}!`;
}

loadQuestion();
nextBtn.style.display = "none";
