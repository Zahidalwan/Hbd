function showSurprise() {
  const surprise = document.getElementById("surprise");

  // Daftar kata-kata manis untuk ibu
  const messages = [
    "Umi, kau adalah pelangi dalam hidupku 🌈",
    "Semoga setiap harimu seindah senyummu 💖",
    "Terima kasih sudah selalu ada untukku 💐",
    "Cintaku padamu tak akan pernah habis ❤️",
    "Umi, engkaulah malaikatku di bumi 👼",
  ];

  // Ambil pesan acak
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  // Tampilkan pesan di surprise
  surprise.textContent = randomMessage;

  // Tampilkan animasi
  surprise.classList.add("show");

  // Hilang lagi setelah 3 detik
  setTimeout(() => {
    surprise.classList.remove("show");
  }, 3000);
}
