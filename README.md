<<<<<<< HEAD
# Lisa Amimo — Portfolio

Personal portfolio site: home, about, skills, projects, experience, and contact
sections in a pixel/retro-arcade style (hard offset shadows, dithered
gradients, pink + mint duotone palette).

## Stack

- React 18 + TypeScript, built with Vite
- Tailwind CSS
- GSAP (`@gsap/react`) for scroll-driven animation
- OGL for the WebGL dithered-gradient backgrounds
- Phosphor Icons
- Fonts self-hosted via Fontsource (Syne, Plus Jakarta Sans, Pixelify Sans)

## Project structure

- `src/components/sections/` — one component per page section (Hero, About,
  Skills, Projects, Experience, Contact)
- `src/components/reactbits/` — reusable visual components (dot-matrix field,
  dithered gradient background, tilting profile card, bento cards, scroll
  text reveal, the Minecraft-style pixel scene)
- `src/constants/site.ts` — site copy, project list, experience history,
  contact links
- `src/hooks/` — small shared hooks (reduced-motion, active-section tracking)

## Running locally

**Prerequisites:** Node.js

```
npm install
npm run dev
```

Other scripts:

```
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint       # eslint
```

No environment variables or API keys are required. The contact form opens
the visitor's email client via a `mailto:` link rather than calling a backend.
=======

1. Install dependencies:
   `npm install`

>>>>>>> 4c3f1dbc545d9b11dd2de83c72f84a96683c6f50
