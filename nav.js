// Nav component injected on every page
// Call: renderNav('nom-page-active')

function renderNav(activePage) {
  const nav = [
    { href: 'index.html', label: 'Accueil' },
    { href: 'formations.html', label: 'Formations' },
    { href: 'specialites.html', label: 'Spécialités' },
    { href: 'procedures.html', label: 'Procédures' },
    { href: 'equipements.html', label: 'Équipements' },
    { href: 'interventions.html', label: 'Interventions' },
    { href: 'intranet.html', label: 'Intranet' },
  ];

  const topNavHTML = nav.map(n =>
    `<a href="${n.href}" class="${n.href === activePage ? 'active' : ''}">${n.label}</a>`
  ).join('');

  document.querySelector('.topbar-nav').innerHTML = topNavHTML;

  const sidebarHTML = `
    <div class="sidebar-section">
      <div class="sidebar-label">Navigation</div>
      ${nav.map(n => `
        <a href="${n.href}" class="sidebar-link ${n.href === activePage ? 'active' : ''}">
          <span class="icon">${getSidebarIcon(n.href)}</span>
          ${n.label}
        </a>`).join('')}
    </div>
    <div class="sidebar-section">
      <div class="sidebar-label">Ressources</div>
      <a href="#" class="sidebar-link"><span class="icon">📞</span>Contacts</a>
      <a href="#" class="sidebar-link"><span class="icon">🔗</span>Liens utiles</a>
    </div>
  `;
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.innerHTML = sidebarHTML;
}

function getSidebarIcon(href) {
  const icons = {
    'index.html': '🏠', 'formations.html': '📚', 'specialites.html': '🫀',
    'procedures.html': '📋', 'equipements.html': '🧰', 'interventions.html': '🚨', 'intranet.html': '🔒'
  };
  return icons[href] || '▸';
}
