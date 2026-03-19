// Nav component injected on every page
// Call: renderNav('nom-page-active')

function renderNav(activePage) {
  const topNav = [
    { href: 'index.html', label: 'Accueil' },
    { href: 'formations.html', label: 'Formation' },
    { href: 'specialites.html', label: 'Spécialités' },
    { href: 'procedures.html', label: 'Procédures' },
    { href: 'equipements.html', label: 'Équipements' },
    { href: 'interventions.html', label: 'Interventions' },
    { href: 'intranet.html', label: 'Intranet' },
  ];

  const sideNav = [
    { href: 'index.html', label: 'Accueil', icon: '🏠' },
    { href: 'formations.html', label: 'Formations', icon: '📚' },
    { href: 'specialites.html', label: 'Spécialités', icon: '🫀' },
    { href: 'procedures.html', label: 'Procédures', icon: '📋' },
    { href: 'equipements.html', label: 'Équipements', icon: '🧰' },
    { href: 'interventions.html', label: 'Interventions', icon: '🚑' },
  ];

  const topbar = document.querySelector('.topbar-nav');
  if (topbar) {
    topbar.innerHTML = topNav
      .map((n) => `<a href="${n.href}" class="${n.href === activePage ? 'active' : ''}">${n.label}</a>`)
      .join('');
  }

  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.innerHTML = `
      <div class="sidebar-section">
        <div class="sidebar-label">Navigation</div>
        ${sideNav
          .map(
            (n) => `
              <a href="${n.href}" class="sidebar-link ${n.href === activePage ? 'active' : ''}">
                <span class="icon nav-icon">${n.icon}</span>
                ${n.label}
              </a>`
          )
          .join('')}
        <div class="sidebar-divider"></div>
        <div class="sidebar-label">Accès restreint</div>
        <a href="intranet.html" class="sidebar-link ${activePage === 'intranet.html' ? 'active' : ''}">
          <span class="icon nav-icon">🔒</span>
          Intranet
        </a>
      </div>
      <div class="sidebar-footer">
        <div class="sidebar-footer-text">SAMU 96 · Arma 3 RP<br>Usage interne uniquement</div>
      </div>
    `;
  }
}
