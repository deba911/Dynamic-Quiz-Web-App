const quizData = [
  { question: "How many days RBC survives?", options: ["100 days", "50 days", "120 days", "80 days", " 150 days"], correct: 2 },
  { question: "A computer program that converts assembly language to machine language is", options: ["Compiler", "Assembler", "Interpreter", "Comparater", "None"], correct: 1 },
  { question: "Total bits used by the IPv6 address is", options: ["64 bits", "256 bits", "128 bits", "32 bits", "8 bits"], correct: 2 },
  { question: "What else is a command interpreter called?", options: ["Prompt", "Kernel", "Shell", "Command", "Terminal"], correct: 2 },
  { question: "What is a table joined with itself called?", options: ["Equi Join", "Outer Join", "Self-Join", "Join", "Natural Join"], correct: 2 },
  { question: "Web styling language?", options: ["JavaScript", "Python", "CSS", "Java", "C++"], correct: 2 },
  { question: "The standard length of the MAC address is", options: ["32 bits", "48 bits", "128 bits", "64 bits", "16 bits"], correct: 1 },
  { question: "Which of the following is not an operating system?", options: ["DOS", "MAC", "Windows", "Oracle", "Linux"], correct: 3 },
  { question: "Identify the one which is not a networking device.", options: ["Router", "Switch", "Traffic Analyzer", "Hub", "Bridge"], correct: 2 },
  { question: "Total number of layers in OSI model is", options: ["3", "5", "7", "9", "10"], correct: 2 }
];

let current = 0,
  score = 0,
  selected = -1;

const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const questionText = document.getElementById("question");
const optionsList = document.getElementById("optionsList");
const submitBtn = document.getElementById("submitBtn");
const progressLabel = document.getElementById("progressLabel");
const progressBar = document.getElementById("progressBar");
const scoreText = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

function loadQuestion() {
  const q = quizData[current];
  questionText.textContent = q.question;
  optionsList.innerHTML = "";
  selected = -1;
  submitBtn.disabled = true;

  q.options.forEach((opt, idx) => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.onclick = () => {
      Array.from(optionsList.children).forEach((l) =>
        l.classList.remove("selected")
      );
      li.classList.add("selected");
      selected = idx;
      submitBtn.disabled = false;
    };
    optionsList.appendChild(li);
  });

  progressLabel.textContent = `Question ${current + 1} of ${quizData.length}`;
  progressBar.style.width = `${((current + 1) / quizData.length) * 100}%`;
}

submitBtn.onclick = () => {
  if (selected === quizData[current].correct) score++;
  current++;
  if (current < quizData.length) loadQuestion();
  else showResult();
};

function showResult() {
  quiz.classList.add("hidden");
  result.classList.remove("hidden");
  scoreText.textContent = score;
}

restartBtn.onclick = () => {
  current = 0;
  score = 0;
  quiz.classList.remove("hidden");
  result.classList.add("hidden");
  loadQuestion();
};

loadQuestion();
