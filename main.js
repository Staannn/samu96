// Clock
// main.js
// Handles clock and sidebar toggle

function updateClocks() {
  const now = new Date().toTimeString().slice(0,8);
  const topbarClock = document.getElementById('topbar-clock');
  if (topbarClock) topbarClock.textContent = now;
  const footerClock = document.getElementById('footer-clock');
  if (footerClock) footerClock.textContent = now;
}
setInterval(updateClocks, 1000);
updateClocks();

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.getElementById('sidebar');
  if (hamburger && sidebar) {
    hamburger.onclick = function() {
      sidebar.classList.toggle('open');
    };
  }
});

// Hamburger sidebar
// Active nav highlight
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.topbar-nav a, .sidebar-link').forEach(a => {
  if (a.getAttribute('href') === current || a.getAttribute('href') === './' + current) {
    a.classList.add('active');
  }
});

// Active nav highlight
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.topbar-nav a, .sidebar-link').forEach(a => {
  if (a.getAttribute('href') === current || a.getAttribute('href') === './' + current) {
    a.classList.add('active');
  }
});
