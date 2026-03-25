function copyIP() {
  const ip = "ratarasmp.my..id"; // GANTI IP

  navigator.clipboard.writeText(ip).then(() => {
    showNotif();
  });
}

function showNotif() {
  const notif = document.getElementById("notif");

  notif.classList.add("show");

  setTimeout(() => {
    notif.classList.remove("show");
  }, 2500);
}
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");
}
