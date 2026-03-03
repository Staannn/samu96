// Clock
function updateClock() {
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  const str = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())} · ${now.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}`;
  document.querySelectorAll('.topbar-clock').forEach(el => el.textContent = str);
}
setInterval(updateClock, 1000);
updateClock();

// Hamburger sidebar
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
if (hamburger && sidebar) {
  hamburger.addEventListener('click', () => sidebar.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) sidebar.classList.remove('open');
  });
}

// Active nav highlight
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.topbar-nav a, .sidebar-link').forEach(a => {
  if (a.getAttribute('href') === current || a.getAttribute('href') === './' + current) {
    a.classList.add('active');
  }
});
