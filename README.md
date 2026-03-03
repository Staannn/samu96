# SAMU 96 — Portail Support

Site de support interne pour le SAMU 96. Hébergé via GitHub Pages.

## Structure

```
samu96/
├── index.html          # Page d'accueil
├── formations.html     # Documents de formation
├── specialites.html    # Spécialités médicales
├── procedures.html     # Procédures opérationnelles
├── equipements.html    # Équipements & inventaire
├── intranet.html       # Intranet & fiches terrain
├── css/
│   └── style.css       # Styles globaux
└── js/
    ├── main.js         # Horloge + navigation
    └── nav.js          # Composant nav injecté
```

## Hébergement GitHub Pages

1. Créer un repo GitHub (ex: `samu96-support`)
2. Uploader tous les fichiers à la racine
3. Aller dans **Settings → Pages → Source → main branch / root**
4. Le site sera accessible sur `https://[username].github.io/samu96-support/`

## Personnalisation

- Modifier les données dans chaque `.html` directement
- Ajouter de vrais liens vers vos documents (Google Drive, etc.)
- Personnaliser les contacts dans `intranet.html`
