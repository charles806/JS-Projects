const quizData = [
  {
    question: "What is the capital of France?",
    a: "Paris",
    b: "Madrid",
    c: "Berlin",
    d: "Lisbon",
    answer: "a",
  },

  {
    question: "Who is the best footballer in the world",
    a: "Messi",
    b: "Ronaldo",
    c: "Neyamr",
    d: "Morata",
    answer: "b",
  },

  {
    question: "Who is the richest person in the world",
    a: "Larry",
    b: "Mark",
    c: "Bill Gates",
    d: "Elon",
    answer: "d",
  },

  {
    question: "Who is the president of Nigeria",
    a: "Buhari",
    b: "Charles",
    c: "Tinubu",
    d: "Diddy",
    answer: "c",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuestion];
  questionEl.innerHTML = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuiz();
  } else {
    alert("You Finished");
  }
});

