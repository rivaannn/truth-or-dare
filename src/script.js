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
    "Kepada siapakah Anda berhutang dalam hidup yang tidak akan pernah bisa Anda bayar kembali?",
    "Apa yang telah Anda bicarakan untuk tidak melakukan sesuatu yang akan Anda lakukan pada saat Anda memiliki kesempatan berikutnya?",
    "Apa yang Anda lakukan ketika Anda sendirian di rumah?",
    "Apa yang Anda lakukan ketika Anda merasa sangat marah?",
    "Apa yang telah Anda lakukan yang sebelumnya tidak Anda pikirkan bisa Anda lakukan?",
    "Maju satu tahun ke depan dan lihatlah ke belakang. Apa yang membuat Anda senang?",
    "Apa yang Anda “luruskan” saat mereka ada di sekitar Anda?",
    "Apakah Anda pernah mengatakan tidak pernah atau tidak pernah mengatakan tidak pernah?",
    "Di mana Anda pernah menarik garis yang tidak Anda lakukan lagi?",
    "Terlepas dari keyakinan, ide, atau perasaan yang dapat berubah, apa yang benar-benar Anda yakini setiap saat?",
    "Apa hal terpenting yang Anda inginkan yang tidak Anda miliki saat Anda tumbuh dewasa?",
    "Apa nasihat terbaik yang pernah Anda dapatkan?",
    "Jika Anda dapat kembali ke masa lalu lima hingga sepuluh tahun dan memberikan nasihat kepada diri Anda sendiri, apakah nasihat itu?",
    "Jika hal itu diketahui, apa yang akan membuat Anda mendapat masalah?",
    "Apa hal terbaik yang pernah dikatakan seseorang kepada Anda?",
    "Siapa orang yang paling kamu benci di antara kita?",
    "Siapa orang yang terakhir kamu hubungi di WhatsApp?",
    "Hal apa yang membuat kamu sangat bahagia?",
    "Hal apa yang membuat kamu sangat ketakutan?",
    "Apa yang paling kamu benci dari dirimu?",
    "Apa yang kamu lakukan saat bertemu dengan orang yang membencimu?",
    "Siapa orang yang diam-diam kamu sukai?",
    "Siapa orang terakhir yang kamu stalk di media sosial?",
    "Seperti apa kriteria pasanganmu?",
    "Apakah kamu pernah selingkuh dan apa pendapatmu tentang perselingkuhan?",
    "Apakah kamu punya bakat tersembunyi?",
    "Apakah kamu pernah ngompol?",
    "Hal paling aneh apa yang pernah kamu lakukan di depan cermin?",
    "Apakah kamu pernah berbohong untuk kabur dari sebuah kencan? Kalau iya, apa kebohongannya?",
    "Apa hal yang terakhir kamu cari di ponselmu?",
    "Apa pernahkah kamu mencoba makan sesuatu yang seharusnya tidak dimakan?",
    "Apa hal paling aneh yang pernah kamu lihat di internet?",
    "Apa hal tergila yang pernah kamu lakukan karena mengikuti tren sosial media?",
    "Apa hal paling konyol yang pernah kamu percaya sebagai anak kecil?",
    "Apa hewan yang paling aneh yang pernah kamu pelihara?",
    "Apa pernahkah kamu mencoba makanan yang tidak lazim dari budaya lain?",
    "Apa hal tergila yang pernah kamu lakukan untuk memenangkan taruhan?",
    "Apa hal teraneh yang pernah kamu coba lakukan di tengah malam?",
    "Apa hal paling konyol yang pernah kamu lakukan di depan umum?",
    "Apa hal paling konyol yang pernah kamu lihat di dalam kamar mandi umum?",
    "Apa hal paling aneh yang pernah kamu bawa dalam tas atau dompetmu?",
    "Apa hal paling aneh yang pernah kamu rasakan?",
    "Apa kebiasaan buruk teraneh yang pernah kamu miliki?",
    "Apa hal tergila yang pernah kamu lakukan karena kehilangan taruhan?",
    "Apa hal paling konyol yang pernah kamu beli secara impulsif?",
    "Apa hal teraneh yang pernah kamu lakukan saat tidur?",
    "Apa hal teraneh yang pernah kamu lakukan karena tertidur saat mengobrol dengan seseorang?",
    "Apa pernahkah kamu berbicara dengan benda mati?",
    "Apa hal teraneh yang pernah kamu coba lakukan dengan makanan?",
    "Apa hal paling konyol yang pernah kamu dengar tentang dirimu sendiri?",
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
