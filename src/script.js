document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("start-btn");
  const truthBtn = document.getElementById("truth-btn");
  const dareBtn = document.getElementById("dare-btn");
  const resetBtn = document.getElementById("reset-btn");
  const gameCard = document.getElementById("game-card");
  const question = document.getElementById("question");
  const buttonGroup = document.getElementById("button-group");

  let resetTimeout;

  // Array pertanyaan truth
  const truths = [
    // 1000 truth questions
    "Apa rahasia terdalammu?",
    "Apa hal paling memalukan yang pernah kamu lakukan?",
    // Tambahkan pertanyaan lainnya di sini...
  ];

  // Array pertanyaan dare
  const dares = [
    // 5 dare questions
    "Lakukan tarian lucu selama 1 menit.",
    "Nyanyikan lagu favoritmu dengan suara keras.",
    // Tambahkan pertanyaan lainnya di sini...
  ];

  function startGame() {
    startBtn.classList.add("hidden");
    question.textContent = "Pilih Truth atau Dare";
    question.classList.remove("hidden");
    buttonGroup.classList.remove("hidden");
    gameCard.classList.add("wow-animation");
    setTimeout(function () {
      gameCard.classList.remove("wow-animation");
    }, 1000);
  }

  function showRandomQuestion(selectedCategory) {
    let selectedQuestion;
    if (selectedCategory === "truth") {
      selectedQuestion = truths[Math.floor(Math.random() * truths.length)];
    } else if (selectedCategory === "dare") {
      selectedQuestion = dares[Math.floor(Math.random() * dares.length)];
    }
    question.textContent = selectedQuestion;
    disableButtons();
    startResetTimer();
  }

  function disableButtons() {
    truthBtn.classList.add("hidden");
    dareBtn.classList.add("hidden");
    resetBtn.classList.remove("hidden");
  }

  function resetGame() {
    startBtn.classList.remove("hidden");
    question.classList.add("hidden");
    buttonGroup.classList.add("hidden");
    truthBtn.classList.remove("hidden");
    dareBtn.classList.remove("hidden");
    truthBtn.disabled = false;
    dareBtn.disabled = false;
    resetBtn.classList.add("hidden");
    question.textContent = "";
    clearTimeout(resetTimeout);
  }

  function startResetTimer() {
    clearTimeout(resetTimeout);
    resetTimeout = setTimeout(resetGame, 60000); // 1 menit
  }

  startBtn.addEventListener("click", startGame);
  resetBtn.addEventListener("click", resetGame);

  // Tambahkan event listener untuk tombol Truth
  truthBtn.addEventListener("click", function () {
    showRandomQuestion("truth");
  });

  // Tambahkan event listener untuk tombol Dare
  dareBtn.addEventListener("click", function () {
    showRandomQuestion("dare");
  });
});
