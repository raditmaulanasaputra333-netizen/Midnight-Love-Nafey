
/* =================================
   MIDNIGHT LOVE — RADIT & NAFEY
   ================================= */


/* 1. BINTANG MALAM */

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


/* 2. COUNTDOWN ULANG TAHUN NAFEY */

function updateBirthdayCountdown() {
  const target = new Date(
    "2026-10-20T00:00:00+07:00"
  ).getTime();

  const now = Date.now();
  const distance = target - now;

  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");

  if (!days || !hours || !minutes) return;

  if (distance <= 0) {
    days.textContent = "🎂";
    hours.textContent = "Happy";
    minutes.textContent = "Birthday!";
    return;
  }

  days.textContent = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  hours.textContent = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  minutes.textContent = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
  );
}


/* 3. PESAN RAHASIA */

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


/* 4. ANIMASI HATI */

function makeHearts(amount = 6) {
  const symbols = ["♡", "♥", "💜", "✦"];

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = (10 + Math.random() * 80) + "vw";
    heart.style.bottom = (10 + Math.random() * 20) + "vh";
    heart.style.color = ["#c6a5f5", "#eee4ff", "#a9b8ff"][
      Math.floor(Math.random() * 3)
    ];
    heart.style.setProperty(
      "--drift",
      (Math.random() * 100 - 50) + "px"
    );

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2600);
  }
}


/* 5. MULAI SEMUA FITUR */

document.addEventListener("DOMContentLoaded", () => {
  createStars();

  updateBirthdayCountdown();

  setInterval(updateBirthdayCountdown, 1000);
});
