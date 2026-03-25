/* =========================
   COPY IP + NOTIF
========================= */
function copyIP() {
  const ip = "ratarasmp.my.id"; // GANTI IP LU

  navigator.clipboard.writeText(ip)
    .then(() => {
      showNotif("IP berhasil disalin: " + ip);
    })
    .catch(() => {
      showNotif("Gagal menyalin IP");
    });
}

function showNotif(text) {
  const notif = document.getElementById("notif");

  if (!notif) return; // biar gak error kalau notif gak ada

  notif.querySelector("span").innerText = text;

  notif.classList.add("show");

  setTimeout(() => {
    notif.classList.remove("show");
  }, 2500);
}

/* =========================
   SIDEBAR
========================= */
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (!sidebar || !overlay) return;

  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
}

/* =========================
   THEME (LIGHT / DARK)
========================= */
function toggleTheme() {
  document.body.classList.toggle("light-mode");

  // optional: ganti icon 🌙 ↔ ☀
  const icon = document.querySelector(".nav-btn i");

  if (icon) {
    if (document.body.classList.contains("light-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  }
}

/* =========================
   AUTO CLOSE SIDEBAR (klik overlay)
========================= */
document.addEventListener("click", function(e) {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (!sidebar || !overlay) return;

  if (e.target === overlay) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  }
});
