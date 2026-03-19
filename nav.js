// Nav component injected on every page
// Call: renderNav('nom-page-active')

function renderNav(activePage) {
  const sectionMap = {
    'tronc-commun.html': 'formations.html',
    'ide-iade.html': 'formations.html',
    'ambulancier.html': 'formations.html',
    'interne-medecin.html': 'formations.html',
    'cardio.html': 'specialites.html',
    'neuro.html': 'specialites.html',
    'trauma.html': 'specialites.html',
    'pneumo.html': 'specialites.html',
    'toxico.html': 'specialites.html',
    'psychiatrie.html': 'specialites.html',
    'eq-bandages.html': 'equipements.html',
    'eq-materiel.html': 'equipements.html',
    'eq-medicaments.html': 'equipements.html',
    'eq-raccourcis.html': 'equipements.html'
  };

  const topbarLinks = [
    { href: 'index.html', label: 'Accueil' },
    { href: 'formations.html', label: 'Formations' },
    { href: 'specialites.html', label: 'Spécialités' },
    { href: 'procedures.html', label: 'Procédures' },
    { href: 'equipements.html', label: 'Équipements' },
    { href: 'interventions.html', label: 'Interventions' },
    { href: 'intranet.html', label: 'Intranet' }
  ];

  const sidebarLinks = [
    { href: 'index.html', icon: '🏠', label: 'Accueil' },
    { href: 'formations.html', icon: '📚', label: 'Formations' },
    { href: 'specialites.html', icon: '🫀', label: 'Spécialités' },
    { href: 'procedures.html', icon: '📋', label: 'Procédures' },
    { href: 'equipements.html', icon: '🧰', label: 'Équipements' },
    { href: 'interventions.html', icon: '🚑', label: 'Interventions' }
  ];

  const activeSection = sectionMap[activePage] || activePage;

  const topbar = document.querySelector('.topbar');
  if (topbar) {
    topbar.innerHTML = `
      <div class="topbar-brand">
        <div class="brand-badge">96</div>
        <div class="brand-text">
          <div class="brand-title">SAMU 96</div>
          <div class="brand-sub">Portail Support</div>
        </div>
      </div>
      <nav class="topbar-nav">
        ${topbarLinks
          .map((link) => `<a href="${link.href}"${activeSection === link.href ? ' class="active"' : ''}>${link.label}</a>`)
          .join('')}
      </nav>
      <div class="topbar-right">
        <span class="status-pill"><span class="status-dot"></span>EN LIGNE</span>
        <span id="topbar-clock" class="topbar-clock"></span>
        <button class="hamburger" aria-label="Menu">☰</button>
      </div>
    `;
  }

  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.innerHTML = `
      <div class="sidebar-label">Navigation</div>
      ${sidebarLinks
        .map(
          (link) =>
            `<a href="${link.href}" class="sidebar-link${activeSection === link.href ? ' active' : ''}"><span class="nav-icon">${link.icon}</span> ${link.label}</a>`
        )
        .join('')}
      <div class="sidebar-divider"></div>
      <div class="sidebar-label">ACCÈS RESTREINT</div>
      <a href="intranet.html" class="sidebar-link${activeSection === 'intranet.html' ? ' active' : ''}"><span class="nav-icon">🔒</span> Intranet</a>
      <div class="sidebar-footer">
        <div class="sidebar-footer-text">SAMU 96 · Arma 3 RP<br>Usage interne uniquement</div>
      </div>
    `;

    sidebar.id = 'sidebar';
  }
}
