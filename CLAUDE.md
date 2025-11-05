# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website (typa.me) built with React, TypeScript, and Vite. It showcases a collection of web applications with thumbnail previews and links. The site is deployed to GitHub Pages via the custom domain typa.me (configured via CNAME).

## Build and Development Commands

- **Start development server**: `npm run dev` (runs on port 3000, accessible at http://localhost:3000)
- **Build for production**: `npm run build` (outputs to `dist/`)
- **Preview production build**: `npm run preview`

## Architecture

### Tech Stack
- **Framework**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS (loaded via CDN in index.html)
- **Font**: Poppins from Google Fonts

### Project Structure
```
/
├── App.tsx              # Main app component, renders header and project grid
├── index.tsx            # React entry point
├── index.html           # HTML template with Tailwind CDN and custom styles
├── constants.ts         # PROJECTS array with project data
├── types.ts             # TypeScript interfaces (Project)
├── components/
│   ├── Header.tsx       # Hero section with animated gradient title
│   └── ProjectCard.tsx  # Individual project card with hover effects
├── vite.config.ts       # Vite configuration with React plugin
└── dist/                # Build output (for GitHub Pages deployment)
```

### Key Design Patterns

**Data Structure**: Projects are defined in `constants.ts` as an array of `Project` objects. Each project has:
- `id`: unique identifier
- `title`: display name
- `description`: short description
- `url`: external link to the project
- `thumbnailUrl`: uses WordPress mshots service for automated screenshots

**Component Architecture**: Simple component hierarchy:
- `App.tsx` imports and maps over `PROJECTS` array
- `Header.tsx` displays the site title with animated gradient effects
- `ProjectCard.tsx` renders individual project cards with hover animations

**Environment Variables**: The vite.config.ts is configured to load `GEMINI_API_KEY` from `.env.local`, though this appears to be unused in the current implementation (likely inherited from AI Studio template).

### Styling Approach

The site uses a dark theme with:
- Background: slate-950 with radial gradient overlays
- Custom animations: `background-pan` for animated gradients, `fade-in-up` for staggered entrance animations
- Hover effects: Cards lift up with shadow effects on hover
- Responsive grid: 1 column on mobile, 2 on tablets, 3 on desktop

### Deployment

The site deploys to GitHub Pages. The CNAME file configures the custom domain `typa.me`. Build artifacts in `dist/` should be committed for GitHub Pages to serve the site.

## Adding New Projects

To add a new project to the portfolio:

1. Add a new entry to the `PROJECTS` array in [constants.ts](constants.ts)
2. Follow the existing `Project` interface structure from [types.ts](types.ts)
3. The WordPress mshots service will automatically generate thumbnails

Example:
```typescript
{
  id: 'my-project',
  title: 'My Project',
  description: 'A brief description of the project',
  url: 'https://myproject.typa.me',
  thumbnailUrl: `https://s.wordpress.com/mshots/v1/${encodeURIComponent('https://myproject.typa.me')}?w=800&h=600`,
}
```
