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
