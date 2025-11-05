# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website (typa.me) built with React, TypeScript, and Vite. It showcases a collection of web applications with thumbnail previews and links. The site is deployed to GitHub Pages via the custom domain typa.me (configured via CNAME).

## Build and Development Commands

- **Start development server**: `npm run dev` (runs on port 3000, accessible at http://localhost:3000)
- **Build for production**: `npm run build` (outputs to `dist/` and copies files to root for GitHub Pages)
- **Preview production build**: `npm run preview`

### Deployment Workflow

The build process automatically:
1. Builds the project to `dist/`
2. Copies the CNAME file to `dist/`
3. Copies all built files from `dist/` to the root directory
4. Stages the assets for git commit

After running `npm run build`, commit and push the changes to deploy to GitHub Pages.

## Architecture

### Tech Stack
- **Framework**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS v3 with PostCSS and Autoprefixer
- **Font**: Poppins from Google Fonts

### Project Structure
```
/
├── App.tsx              # Main app component, renders header and project grid
├── index.tsx            # React entry point (imports index.css)
├── index.html           # HTML template (source for Vite)
├── index.css            # Tailwind CSS imports and custom animations
├── constants.ts         # PROJECTS array with project data
├── types.ts             # TypeScript interfaces (Project)
├── components/
│   ├── Header.tsx       # Hero section with animated gradient title
│   └── ProjectCard.tsx  # Individual project card with hover effects
├── vite.config.ts       # Vite configuration with React plugin
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── assets/              # Built JS and CSS files (copied from dist/)
└── dist/                # Build output directory
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

The site uses Tailwind CSS v3 with custom styles defined in [index.css](index.css):
- **Dark theme**: slate-950 background with radial gradient overlays
- **Custom animations**:
  - `background-pan`: Animated gradient for the title
  - `fade-in-up`: Staggered entrance animations for content
- **Hover effects**: Cards lift up with shadow effects on hover
- **Responsive grid**: 1 column on mobile, 2 on tablets, 3 on desktop

All custom CSS (animations, body styles) are in [index.css](index.css), imported in [index.tsx](index.tsx).

### Deployment

The site deploys to GitHub Pages with custom domain `typa.me` (configured via CNAME file).

**Important**: GitHub Pages serves from the repository root, so built files from `dist/` are copied to the root directory:
- `assets/` contains the bundled JavaScript and CSS
- `index.html` in the root is the entry point

The build script (`npm run build`) automatically handles this copying process.

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
