
let currentQuestion = 0;
let score = 0;

const questions = sakeQuestions;
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");

function showQuestion(index) {
  const q = questions[index];
  quizContainer.innerHTML = `
    <h2>問${index + 1}：${q.question}</h2>
    ${q.choices.map((choice, i) => `<button onclick="checkAnswer(${index}, ${i})">${choice}</button>`).join("")}
  `;
}

function checkAnswer(qIndex, answerIndex) {
  const q = questions[qIndex];
  const isCorrect = answerIndex === q.answer;
  if (isCorrect) score++;
  quizContainer.innerHTML = `
    <h2>問${qIndex + 1}：${q.question}</h2>
    <p><strong>${isCorrect ? "正解！" : "不正解"}</strong></p>
    <p>【解説】${q.explanation}</p>
    <button onclick="nextQuestion()">次へ</button>
  `;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultContainer.innerHTML = `<h2>スコア：${score} / ${questions.length}</h2>`;
  }
}

showQuestion(currentQuestion);
