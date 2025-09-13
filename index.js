const quizData = [
  { question: "How many days RBC survives?", options: ["100 days", "50 days", "120 days", "80 days", " 150 days"], correct: 2 },
  { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn", "Mercury"], correct: 1 },
  { question: "What is the largest mammal?", options: ["African Elephant", "Giraffe", "Blue Whale", "Hippopotamus", "Polar Bear"], correct: 2 },
  { question: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946", "1947"], correct: 2 },
  { question: "Chemical symbol for gold?", options: ["Go", "Gd", "Au", "Ag", "Al"], correct: 2 },
  { question: "Web styling language?", options: ["JavaScript", "Python", "CSS", "Java", "C++"], correct: 2 },
  { question: "Smallest unit of matter?", options: ["Molecule", "Atom", "Proton", "Electron", "Neutron"], correct: 1 },
  { question: "Largest ocean?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean", "Southern Ocean"], correct: 3 },
  { question: "Who painted Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo", "Claude Monet"], correct: 2 },
  { question: "Fastest land animal?", options: ["Lion", "Cheetah", "Leopard", "Gazelle", "Greyhound"], correct: 1 }
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
