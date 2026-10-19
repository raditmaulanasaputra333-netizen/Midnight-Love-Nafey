
function createStars() {
  const starContainer = document.getElementById("stars");
  if (!starContainer) return;

  starContainer.innerHTML = "";

  for (let i = 0; i < 65; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.textContent = Math.random() > 0.8 ? "✦" : "·";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.fontSize = (Math.random() * 12 + 6) + "px";
    star.style.animationDelay = Math.random() * 4 + "s";
    star.style.animationDuration = (Math.random() * 3 + 2) + "s";
    starContainer.appendChild(star);
  }
}

function updateBirthdayCountdown() {
  const target = new Date("2026-10-20T00:00:00+07:00").getTime();
  const distance = target - Date.now();

  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const birthdayMessage = document.getElementById("birthday-unlocked");

  if (!days || !hours || !minutes) {
    console.warn("Elemen countdown tidak ditemukan.");
    return;
  }

  if (distance <= 0) {
    days.textContent = "🎂";
    hours.textContent = "♡";
    minutes.textContent = "♡";

    // Tampilkan ucapan ulang tahun secara otomatis
    if (birthdayMessage && birthdayMessage.hidden) {
      birthdayMessage.hidden = false;
      makeHearts(18);
    }

    return;
  }

  const totalMinutes = Math.floor(distance / 60000);
  const remainingDays = Math.floor(totalMinutes / 1440);
  const remainingHours = Math.floor((totalMinutes % 1440) / 60);
  const remainingMinutes = totalMinutes % 60;

  days.textContent = remainingDays;
  hours.textContent = String(remainingHours).padStart(2, "0");
  minutes.textContent = String(remainingMinutes).padStart(2, "0");
}

function revealSecret() {
  const message = document.getElementById("secretText");
  const button = document.getElementById("secretBtn");
  if (!message) return;

  message.classList.toggle("show");

  if (button) {
    button.textContent = message.classList.contains("show")
      ? "TUTUP PESAN ♡"
      : "BUKA PESAN RAHASIA";
  }

  if (message.classList.contains("show")) {
    makeHearts(8);
  }
}

function makeHearts(amount = 6) {
  const symbols = ["♡", "♥", "💜", "✦"];

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = (10 + Math.random() * 80) + "vw";
    heart.style.bottom = (10 + Math.random() * 20) + "vh";
    heart.style.color = ["#c6a5f5", "#eee4ff", "#a9b8ff"][
      Math.floor(Math.random() * 3)
    ];
    heart.style.setProperty("--drift", (Math.random() * 100 - 50) + "px");

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2600);
  }
}

// Surat interaktif
function initInteractiveLetter() {
  const openButton = document.getElementById("ml-open-envelope");
  const hiddenLetter = document.getElementById("ml-hidden-letter");

  if (!openButton || !hiddenLetter) return;

  openButton.addEventListener("click", () => {
    const opening = hiddenLetter.hidden;
    hiddenLetter.hidden = !opening;

    openButton.textContent = opening
      ? "Tutup surat 💌"
      : "Buka suratmu 💌";

    openButton.setAttribute("aria-expanded", String(opening));

    if (opening) {
      hiddenLetter.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  });
}

// Kejutan penutup
function initFinalSurprise() {
  const button = document.getElementById("ml-surprise-button");
  const message = document.getElementById("ml-surprise-message");

  if (!button || !message) return;

  button.addEventListener("click", () => {
    const opening = message.hidden;
    message.hidden = !opening;

    button.textContent = opening
      ? "Tutup kejutan ♡"
      : "Buka kejutan terakhir ✨";

    if (opening) {
      makeHearts(14);

      message.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  });
}

function startPage() {
  createStars();
  updateBirthdayCountdown();
  setInterval(updateBirthdayCountdown, 1000);

  initInteractiveLetter();
  initFinalSurprise();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startPage);
} else {
  startPage();
      }

