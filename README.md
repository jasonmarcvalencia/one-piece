# Grand Line Database

A One Piece fan encyclopedia built with React, TypeScript, and Tailwind CSS.

## Features

- **Characters** — Browse 39 characters across Straw Hats, Heart Pirates, Admirals, and Warlords with grid/list views and bounty sorting
- **Story Arcs** — 10 major arcs from East Blue to Egghead in an interactive accordion layout
- **Devil Fruits** — Compact grid of Paramecia, Zoan, and Logia fruits with expandable detail panels
- **Dark Mode** — Toggle between light and dark themes with localStorage persistence
- **Smooth Scroll** — Lenis-powered buttery smooth scrolling across all pages
- **Scroll Reveal** — Elements animate into view as you scroll

## Tech Stack

- [React](https://react.dev) + [TypeScript](https://typescriptlang.org)
- [Vite](https://vitejs.dev) — build tooling
- [Tailwind CSS](https://tailwindcss.com) + [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)
- [React Router](https://reactrouter.com) — client-side routing
- [Lenis](https://lenis.darkroom.engineering) — smooth scroll
- [Lucide React](https://lucide.dev) — icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app runs at [http://localhost:8080](http://localhost:8080).

## Project Structure

```
src/
  components/    — Navbar, Footer, CharacterCard, etc.
  pages/         — HomePage, CharactersPage, StoryArcsPage, DevilFruitsPage, AboutPage
  hooks/         — useLenis, useScrollReveal
  assets/        — Hero background image
public/
  straw hats/    — Straw Hat crew images
  heart pirates/ — Heart Pirates crew images
  admirals/      — Marine Admiral images
  warlords/      — Warlord images
  devil fruits/  — Devil Fruit images
```

## Disclaimer

This is a non-commercial fan project. One Piece and all related characters, names, and images are the property of Eiichiro Oda, Shueisha, Toei Animation, and their respective owners.
