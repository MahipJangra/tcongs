# Tcongs Infotech — Homepage Redesign

A production-quality redesign of the Tcongs Infotech homepage, built with React, Vite and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Deploying to Render

1. Push this folder to a GitHub repo.
2. Import the repo in Render.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

## Structure

```
src/
├── components/       # Navbar, Hero, Services, About, WhyUs, Technologies,
│                      Process, Solutions, CTA, FAQ, Footer, Reveal, ui/Button
├── data/content.js    # all real copy, sourced from tcongsinfotech.com
├── hooks/useReveal.js # IntersectionObserver-based scroll-reveal hook
├── App.jsx
├── main.jsx
└── index.css
```

All company facts (services, process steps, FAQs, contact email, location) are
sourced directly from https://tcongsinfotech.com/ and https://tcongsinfotech.com/about.html —
no fabricated stats, clients, or testimonials.
